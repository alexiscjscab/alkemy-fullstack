import React, { useEffect, useState } from 'react';
import FormCtn from './styledForm';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getOperation, getOperationByPk} from '../../actions/actions';
import {Link, useHistory} from 'react-router-dom';


const Edit = ({match}) => {

    const id = match.params.id;

    const operation = useSelector (state => state.operationID)
    

    const [concept, setConcept] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [edit, setEdit] = useState(null)

    const [error, setError] = useState('');
    
    const dispatch = useDispatch();
    const history = useHistory();
    
    useEffect(() => {
        dispatch(getOperationByPk(id))
        const modEdit = () => {
            setEdit(true)
        }
        modEdit()
    },[dispatch,id])

    setTimeout(() => {
        if(edit){
            if(operation !== []){
                setAmount(operation.amount)
                setConcept(operation.concept)
                setEdit(null)
            }
        }
    },2000)
    
    

    const update = async (e) => {
        e.preventDefault();
        const dataBase = {
            id,
            concept,
            date,
            amount
        }
        if(concept.trim() !== '' || amount.trim() !== '' || date.trim() !== ''){
            await axios.put(`http://localhost:4000/api/`,dataBase);
            dispatch(getOperation());
            setError(null)
            setTimeout(() => {
                history.push('/home')
            },2000)
        }else{
            setError('Empty Fields')
        }
    }

    return (
        <div style={{display: 'flex',justifyContent: 'center', marginTop: '20px'}}>
            <FormCtn onSubmit={update}>

                <h2> Edit Operation </h2>

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

                <div className='send-button'>
                    <input
                        type='submit'
                        value='Add'
                    />

                </div>

                <Link to='/home'> HOME </Link>

                {
                    error ? (
                        <h4>{error} </h4>
                    ) :  null
                }

            </FormCtn>
            
        </div>
    )
};

export default Edit;