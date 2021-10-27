import React, { useState } from 'react';
import FormCtn from './styledForm';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getOperation} from '../../actions/actions';
import {useHistory} from 'react-router-dom';
import Select from '../Filter/styledFilter';


const Form = () => {

    const [concept, setConcept] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('Expenses');
    const [error, setError] = useState('');
    const [selec, setSelec] = useState([])
    

    const dispatch = useDispatch();
    const history = useHistory();

    const category = useSelector (state => state.category)

    const Send = async(e) => {
        e.preventDefault()
        
        if(concept.trim() !== '' || amount.trim() !== '' || date.trim() !== '' || type.trim() !== ''){
            const dataBase = {
                concept: concept.trim(),
                amount: amount.trim(),
                date: date.trim(),
                type: type.trim(),
                category: selec
            }
            await axios.post(`http://localhost:4000/api/`,dataBase);
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

    const changeSelect = (e) => {
        const value = e.target.value
        if(value === "Category"){
            return
        }else{
            setSelec([value])
        }
    }

    const changeRadio = e => {
        setType(e.target.value)
    }

    const deleteKey = (key) => {
        
        let update = selec.filter(x => selec[key] !== x);
        setSelec(update);
        
    }

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
                    
                        <span>Expenses</span>
                        <input
                            type="radio" 
                            id='radio1' 
                            value="Expenses" 
                            checked={type === 'Expenses' ? true: false} 
                            onChange={changeRadio}
                            
                         />
                        <span>Income</span>
                        <input 
                            type="radio" 
                            id='radio2' 
                            value="Income" 
                            checked={type === 'Income' ? true :false}
                            onChange = {changeRadio}
                            />
                </div>

                <Select>
                    {!category?null:
                            <select className='selects' onChange={changeSelect} required>
                                <option key={-1} value={"Category"}>Category</option>
                                {
                                    category.map((item, index) => (
                                        <option 
                                            key={index} 
                                            value={item}>{item}
                                        </option>
                                ))
                            }
                        </select>
                    }
                    {
                    selec.map((item, index) => (
                        <div key={index}>
                            <span>{item}</span>
                            <span className='delete' onClick={(key) => deleteKey(index)}>X</span>
                        </div>
                    ))
                    }
 
                </Select>
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
