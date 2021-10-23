import React, { useState } from 'react';
import FormCtn from './styledForm';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getOperation} from '../../actions/actions';
import {useHistory} from 'react-router-dom';


const Form = () => {

    const [concept, setConcept] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('');
    const [error, setError] = useState('');
    
    const dispatch = useDispatch();
    const history = useHistory();


    const Send = async(e) => {
        e.preventDefault()
        
        if(concept.trim() !== '' || amount.trim() !== '' || date.trim() !== '' || type.trim() !== ''){
            const dataBase = {
                concept: concept.trim(),
                amount: amount.trim(),
                date: date.trim(),
                type: type.trim()
            }
            await axios.post(`http://localhost:4000/`,dataBase);
            dispatch(getOperation());
            
            
            setTimeout(() => {
                setConcept('');
                setAmount('');
                setDate('');
                setType('');
                setError(null);
                history.push('/home')
            },1500)

        }else{
            setError('empty fields')
        }
    };

    return (
        <div style={{display: 'flex',justifyContent: 'center', marginTop: '20px'}}>
            <FormCtn onSubmit={Send}>

                <h2> Add Operation </h2>

                <div className='concept'>
                    <label>Concept: </label>
                    <input
                        type='text'
                        placeholder='Concept'
                        value={concept}
                        onChange={(e) => setConcept(e.target.value)}
                        required
                    />
                </div>

                <div className='amount'>
                    <label>Amount: </label>
                    <input
                        type='number'
                        placeholder='Amount'
                        min = '0'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>

                <div className='date'>
                    <label>Date: </label>
                    <input
                        type='date'
                        placeholder='Date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>

                <div className='type'>
                    <label>Type: </label>
                    <input
                        type='text'
                        placeholder='Type'
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    />
                </div>

                
                <div className='send-button'>
                    <input
                        type='submit'
                        value='Add'
                    />

                </div>


                {
                    error ? (
                        <h4>{error} </h4>
                    ) :  null
                }

            </FormCtn>
            
        </div>
    )
};

export default Form;
