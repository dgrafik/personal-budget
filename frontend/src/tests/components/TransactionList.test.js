import React from 'react';
import { shallow } from 'enzyme';
import { TransactionsList } from '../../components/TransactionsList';
import transactions from '../fixtures/transactions';

test('should render TransactionList with Transactions', () => {
  const transactionsList = Object.entries(transactions).map(([key, value]) => {
    const reasult = value
    reasult.id = key
    return reasult
  })
  const wrapper = shallow(<TransactionsList transactions={transactionsList} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render TransactionList with empty message', () => {
  const wrapper = shallow(<TransactionsList transactions={[]} />);
  expect(wrapper).toMatchSnapshot();
});