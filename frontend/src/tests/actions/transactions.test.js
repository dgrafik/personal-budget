import { addTransaction, editTransaction, removeTransaction } from '../../actions/transactions';

test('should setup remove Transaction action object', () => {
    const action = removeTransaction({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_TRANSACTION',
        id: '123abc'
    });
});

test('should setup edit Transaction action object', () => {
    const action = editTransaction('123abc', { note: 'Test note'})
    expect(action).toEqual({
        type: 'EDIT_TRANSACTION',
        id: '123abc',
        updates: {
            note: 'Test note'
        }
    });
});

test('should setup transaction action object with provided values', () => {
    const TransactionData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'Example note'
    };
    const action = addTransaction(TransactionData)
    expect(action).toEqual({
        type: 'ADD_TRANSACTION',
        transaction: {
            ...TransactionData,
            id: expect.any(String)
        }
    })
})

test('should setup add transaction action with default values', () => {
    const action = addTransaction({})
    expect(action).toEqual({
        type: 'ADD_TRANSACTION',
        transaction: {
            id: expect.any(String), 
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})