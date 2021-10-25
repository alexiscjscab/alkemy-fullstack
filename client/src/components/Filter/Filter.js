import React from 'react';
import Select from './styledFilter';

import { useDispatch } from 'react-redux';
import { getOperation, selectExpenses, selectIncome } from '../../actions/actions';

const Filter = () => {

    const dispatch = useDispatch();

    const selectType = (e) => {

        const value = e.target.value;

        return(
            value === 'Income' ? dispatch(selectIncome()) : 
            value === 'Expenses' ? dispatch(selectExpenses()) :
            value === 'All' ? dispatch(getOperation()) : 
            null
        )
    };


    return (
        <div>
            <Select>
                <select onChange={selectType} className='selects'>
                    <option value='All'>All</option>
                    <option value='Income'>Income</option>
                    <option value='Expenses'>Expenses</option>
                </select>

            </Select>
        </div>
    )

};

export default Filter;
