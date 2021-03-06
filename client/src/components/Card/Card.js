import React from 'react';
import { useDispatch } from 'react-redux';
import { getOperation } from '../../actions/actions';
import axios from 'axios'

import CardCtn, {Button} from './styledCard';
import { Link } from 'react-router-dom';



const Card = ({amount, concept, date, type, id, category}) => {

    const dispatch = useDispatch();

    const deleteOperation = async(id) => {
        await axios.delete(`http://localhost:4000/api/${id}`)
        dispatch(getOperation())
    }

   

    return (
        <CardCtn>

            <div className='amount'>
                <h3> Amount: </h3>
                <p> ${amount} </p>
            </div>

            <div className="concept">
                <h3> Concept: </h3>
                <p> {concept} </p>
                
            </div>
            
            <div className='date'>
                <h3> Date: </h3>
                <p> {date.slice(0,10)}</p>
            </div>
            
            <div className='type'>
                <h3> Type: </h3>
                <p> {type} </p>
            </div>
            
            
                
            <div className='category'>
                <h3> Category </h3>
                <p> {category}</p>
            </div>
            
            
            
            

            <div className='id'>
                
                <Link to={`/edit/${id}`}>
                    <Button>Edit</Button>
                </Link>
                <Button 
                    color='true'
                    onClick={() => deleteOperation(id)}> Delete
                </Button>
            </div>
        </CardCtn>
    )
}

export default Card
