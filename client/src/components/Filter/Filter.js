import React, { useEffect } from 'react';
import Select from './styledFilter';

import { useDispatch, useSelector } from 'react-redux';
import { getOperation, selectExpenses, selectIncome, getCategory, byCategory} from '../../actions/actions';

const Filter = () => {

    const dispatch = useDispatch();
    const category = useSelector(state => state.category);

    useEffect(() => {
        dispatch(getCategory())
    },[dispatch]);
    

    const selectType = (e) => {
        const value = e.target.value;
        return(
            value === 'Income' ? dispatch(selectIncome()) : 
            value === 'Expenses' ? dispatch(selectExpenses()) :
            value === 'All' ? dispatch(getOperation()) : 
            null
        )
    };

    const selectCategory = (e) => {
        const value = e.target.value;
        if(value === 'Category'){
            return
        }else{
            dispatch(byCategory(value));
        }
    }

    return (
        <div>
            <Select>
                
                <select onChange={selectType} className='selects'>
                    <option value='All'>All</option>
                    <option value='Income'>Income</option>
                    <option value='Expenses'>Expenses</option>
                </select>

                {!category?<h3>Loading...</h3>:
                        <select className="selects" onChange={selectCategory}>
                            <option key={1} value={"Category"}>Category</option>
                            {
                                category.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))
                            }
                        </select>
                    }

            </Select>

        </div>
    )

};

export default Filter;
