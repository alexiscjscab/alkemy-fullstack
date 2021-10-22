import React,{ useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { getOperation } from '../../actions/actions'; 
import Card from '../Card/Card';

import CardsCtn  from './styledCards'


const Cards = () => {

    const dispatch = useDispatch()
    const operaciones = useSelector(state => state.operation)
  
  
    useEffect(() => {
      dispatch(getOperation())
    },[dispatch])
  
    console.log(operaciones)
    
    return (
        <CardsCtn>
            <div className='ctn-grid'>
                {
                    operaciones.map((operation) => (
                        <Card 
                            key={operation.id} 
                            amount={operation.amount}
                            date={operation.date}
                            id={operation.id}
                            concept={operation.concept}
                            type={operation.type}
                        />
                    ))
                }
            </div>
        </CardsCtn>
    )
}

export default Cards
