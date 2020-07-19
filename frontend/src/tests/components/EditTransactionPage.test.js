import React from 'react';
import { shallow } from 'enzyme';
import transactions from '../fixtures/transactions';
import { EditTransactionPage } from '../../components/EditTransaction';

let startEditTransaction, startRemoveTransaction, history, wrapper;

beforeEach(() => {
  startEditTransaction = jest.fn();
  startRemoveTransaction = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditTransactionPage
      startEditTransaction={startEditTransaction}
      startRemoveTransaction={startRemoveTransaction}
      history={history}
      Transaction={transactions[2]}
    />
  );
});

test('should render EditTransactionPage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editTransaction', () => {
  wrapper.find('TransactionForm').prop('onSubmit')(transactions[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditTransaction).toHaveBeenLastCalledWith(transactions[2].id, transactions[2]);
});

test('should handle removeTransaction', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveTransaction).toHaveBeenLastCalledWith({
    id: transactions[2].id
  });
});