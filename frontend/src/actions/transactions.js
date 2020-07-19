import myApi from './api'
import uuid from 'uuid';

export const addTransaction = (
    {
        id = uuid(),
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_TRANSACTION',
    transaction: {
        id,
        description,
        note,
        amount,
        createdAt
    }
})

export const startAddTransaction = (description, note, amount, createdAt) => {
    const id = uuid()
    const action = addTransaction({
        id,
        description,
        note,
        amount,
        createdAt
    })
    return (dispatch) => (
        myApi.endpoints.transactions.create(action).then(res => {
            dispatch(action)
        })
    )
}

export const removeTransaction = ({id} = {}) => ({
    type: 'REMOVE_TRANSACTION',
    id
})

export const startRemoveTransaction = (id) => {
    const action = removeTransaction({id})
    return (dispatch) => (
        myApi.endpoints.transactions.delete(action).then(res => {
            dispatch(action)
        })
    )
}

export const editTransaction = (id, updates) => ({
    type: 'EDIT_TRANSACTION',
    id,
    updates
});

export const startEditTransaction = (id, updates) => {
    const action = editTransaction(id, updates)
    return (dispatch) => (
        myApi.endpoints.transactions.update(action).then(res => {
            dispatch(action)
        })
    )
}

export const setTransactions = (data) => ({
    type: 'SET_TRANSACTIONS',
    transactions: {
        data: data
    }
})

export const startGetTransactions = () => {
    return (dispatch) => (
        myApi.endpoints.transactions.getAll().then(res => {
            dispatch(setTransactions(res.data));
        })
    )
}