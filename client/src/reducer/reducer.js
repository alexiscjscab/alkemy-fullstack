const initialState = {
    operation : [],
    operationID  : [],
    balance: []
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        
        case 'GET_OPERATION':
            return{
                ...state,
                operation : payload.data,
                balance : payload.balance
            }

        case 'GET_OPERATION_PK':
            return{
                ...state,
                operationID : payload.data
            }    
        default:
            return state;
    }
};

export default rootReducer;