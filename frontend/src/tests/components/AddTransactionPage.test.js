import React from 'react';
import { shallow } from 'enzyme';
import { AddTransactionPage } from '../../components/AddTransaction';
import transactions from '../fixtures/transactions';

let startAddTransaction, history, wrapper;

beforeEach(() => {
  startAddTransaction = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddTransactionPage startAddTransaction={startAddTransaction} history={history} />);
});

test('should render AddTransactionPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('TransactionForm').prop('onSubmit')(transactions[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startAddTransaction).toHaveBeenLastCalledWith(transactions[1]);
});