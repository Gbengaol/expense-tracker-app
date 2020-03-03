export const AppReducer = (state, action) => {
    switch(action.type){
        case 'GET_ITEMS':
            return { 
                ...state, 
                transactions: action.payload,
                loading: false
            }
        case 'ADD_ITEM': 
            return {
                ...state, 
                transactions: [
                    action.payload,
                    ...state.transactions 
                ]
            }
        case 'REMOVE_ITEM':
            let transactions = state.transactions.filter(transaction => transaction._id !== action.payload);
            return {
                ...state, 
                transactions
            }
        case 'ERROR':
            return {
                ...state,
                error: action.payload
            }
        default: return state;
    }
}