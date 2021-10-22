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
}

