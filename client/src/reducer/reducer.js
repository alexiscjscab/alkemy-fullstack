const initialState = {
    operation : []
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        
        case 'GET_OPERATION':
            return{
                ...state,
                operation : payload.data
            }
    
        default:
            return state;
    }
};

export default rootReducer;