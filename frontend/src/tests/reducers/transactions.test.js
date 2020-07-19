import TransactionsReducer from '../../reducers/transactions';
import transactions from '../fixtures/transactions';

test('should set default state', () => {
  const state = TransactionsReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should remove Transaction by id', () => {
  const reasult = {"2": transactions["2"], "3": transactions["3"]}
  const action = {
    type: 'REMOVE_TRANSACTION',
    id: 1
  };
  const state = TransactionsReducer(transactions, action);
  expect(state).toEqual(reasult);
});

test('should not remove Transactions if id not found', () => {
  const action = {
    type: 'REMOVE_Transaction',
    id: '-1'
  };
  const state = TransactionsReducer(transactions, action);
  expect(state).toEqual(transactions);
});

test('should add an Transaction', () => {
  const transaction = {
    id: '109',
    description: 'Laptop',
    note: '',
    createdAt: 20000,
    amount: 29500
  };
  const action = {
    type: 'ADD_TRANSACTION',
    transaction
  };
  const state = TransactionsReducer(transactions, action);
  expect(state).toEqual({...transactions, '109' : {id: '109', description: 'Laptop', note: '', amount: 29500, createdAt: 20000}});
});

test('should edit an Transaction', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_TRANSACTION',
    id: 2,
    updates: {
      amount
    }
  };
  const state = TransactionsReducer(transactions, action);
  expect(state['2'].amount).toBe(amount);
});

test('should not edit an Transaction if id not found', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_TRANSACTION',
    id: '-1',
    updates: {
      amount
    }
  };
  const state = TransactionsReducer(transactions, action);
  expect(state).toEqual(transactions);
});