import React from 'react'

import CardCtn from './styledCard'


const Card = ({
    amount, concept,date,type,id
}) => {
    return (
        <CardCtn>
            <div className="concept">
                <p>Concept: </p>
                <p>{concept} </p>
                <p>Date: </p>
                <p>{date}</p>
            </div>
            
            <div className='amount'>
                <p>Amount: </p>
                <p>${amount} </p>
                <p>Type:</p>
                <p>{type}</p>
            </div>

            <div className='id'>
                <span>Edit</span>
                <span> Remove</span>
                <p>{id}</p>
            </div>
        </CardCtn>
    )
}

export default Card
