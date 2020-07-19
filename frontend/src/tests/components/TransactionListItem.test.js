import React from 'react';
import { shallow } from 'enzyme';
import Transactions from '../fixtures/transactions';
import TransactionListItem from '../../components/TransactionListItem';

test('should render TransactionListItem correctly', () => {
  const wrapper = shallow(<TransactionListItem {...Transactions[0]} />);
  expect(wrapper).toMatchSnapshot();
});