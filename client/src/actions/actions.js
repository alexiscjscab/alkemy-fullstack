import axios from 'axios';

export const getOperation = () =>  async (dispatch) => {
    try{
        const res = await axios.get('http://localhost:4000/api/');
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
        const res = await axios.get(`http://localhost:4000/api/${id}`);
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
        const res = await axios.get('http://localhost:4000/api/');
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
        const res = await axios.get('http://localhost:4000/api/');
        const result = res.data;
        dispatch({
            type: 'SELECT_EXPENSES',
            payload: result
        })            

    }catch(e){
        console.log(e)
    }
};

export const getCategory = () => async (dispatch) => {
    try{

        const res = await axios.get('http://localhost:4000/category/');
        const result = res.data;
        dispatch({
            type: 'GET_CATEGORY',
            payload: result
        })

    }catch(e){
        console.log(e);
    }
};

export const byCategory = (data) => async (dispatch) => {

    try{
        let res = await axios.get(`http://localhost:4000/category/${data}`);
        let result = res.data;
        dispatch({
            type: 'BY_CATEGORY',
            payload: result
        })

    }catch(e){
        console.log(e);
    }

};