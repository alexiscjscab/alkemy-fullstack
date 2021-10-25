import axios from 'axios';

export const getOperation = () =>  async (dispatch) => {
    try{
        const res = await axios.get('http://localhost:4000/')
        const result = res.data;
        dispatch({
            type: 'GET_OPERATION',
            payload: result
        })
    }catch(e){
        console.log(e)
    }
};

export const getOperationByPk = (id) => async (dispatch) => {
    try{
        const res = await axios.get(`http://localhost:4000/${id}`)
        const result = res.data;
        dispatch({
            type: 'GET_OPERATION_PK',
            payload: result
        })
    }catch(e){
        console.log(e)
    }
};

export const selectIncome = () => async (dispatch) => {
    try{
        const res = await axios.get('http://localhost:4000/')
        const result = res.data;
        dispatch({
            type: 'SELECT_INCOME',
            payload: result
        })            

    }catch(e){
        console.log(e)
    }
};

export const selectExpenses = () => async (dispatch) => {
    try{
        const res = await axios.get('http://localhost:4000/')
        const result = res.data;
        dispatch({
            type: 'SELECT_EXPENSES',
            payload: result
        })            

    }catch(e){
        console.log(e)
    }
};
