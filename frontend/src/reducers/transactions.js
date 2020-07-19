const expansesReducerDefaultState = {}

export default (state = expansesReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TRANSACTIONS':
            const { data } = action.transactions
            return data
        case 'ADD_TRANSACTION':
            const {id, description, note, amount, createdAt} = action.transaction;
            return { ...state, [id]: { id: id, description: description, note: note, amount: amount, createdAt: createdAt}};
        case 'REMOVE_TRANSACTION':
            const { [action.id]: deleteTransaction, ...restOfTransactions } = state;
            return restOfTransactions
        case 'EDIT_TRANSACTION':
            if (state[action.id] !== undefined){
                return { ...state, [action.id]: {...state[action.id], ...action.updates}}
            }
            else {
                return state;
            }
        default:
            return state;
    }
}