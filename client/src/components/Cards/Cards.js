import React,{ useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { getOperation } from '../../actions/actions'; 
import Balance from '../Balance/Balance';
import Card from '../Card/Card';

import CardsCtn  from './styledCards'


const Cards = () => {

    const dispatch = useDispatch();
    const operaciones = useSelector(state => state.operation);
    const balance = useSelector(state => state.balance);
  
  
    useEffect(() => {
      dispatch(getOperation())
    },[dispatch])
  
    console.log(operaciones);
    
    console.log(balance)

    return (
        <div>
            <Balance income={balance.income} expenses={balance.expenses} balance={balance.balance}/>
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
                                category={operation.categories[0].name}
                            />
                        ))
                    }
                </div>
            </CardsCtn>
        </div>
    )
}

export default Cards
