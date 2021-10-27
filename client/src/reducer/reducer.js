const initialState = {
    operation : [],
    operationID  : [],
    balance: [],
    category: undefined
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

        case 'SELECT_INCOME':

            let income = payload.data.filter((item) => item.type === 'Income');

            return {
                ...state,
                operation: income
            }
        
        case 'SELECT_EXPENSES':
            
            let expenses = payload.data.filter((item) => item.type === 'Expenses')    

            return {
                ...state,
                operation: expenses
            }

        case 'GET_CATEGORY':
            return {
                ...state,
                category: payload.data.map(item => item.name)
            }

        case 'BY_CATEGORY':
            return{
                ...state,
                operation: payload.data
            }    

        default:
            return state;
    }
};

export default rootReducer;