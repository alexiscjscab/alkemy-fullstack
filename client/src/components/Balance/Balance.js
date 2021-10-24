import React from 'react';
import BalanceCtn from './styledBalance';


const Balance = ({income, expenses, balance}) => {
    return (
        <BalanceCtn>
                <ul>
                    <li> Income <span>${income}</span> </li>
                    <li> Expenses <span>${expenses}</span> </li>
                    <li> Balance <span>${balance}</span> </li>
                </ul>
        </BalanceCtn>
    )
}

export default Balance
