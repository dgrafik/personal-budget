import React from 'react';
import { shallow } from 'enzyme';
import { TransactionsSummary } from '../../components/TransactionsSummary';

test('should correctly render TransactionsSummary with 1 Transaction', () => {
  const wrapper = shallow(<TransactionsSummary TransactionCount={1} TransactionsTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render TransactionsSummary with multiple Transactions', () => {
  const wrapper = shallow(<TransactionsSummary TransactionCount={23} TransactionsTotal={23512340987} />);
  expect(wrapper).toMatchSnapshot();
});