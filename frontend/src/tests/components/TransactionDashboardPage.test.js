import React from 'react';
import { shallow } from 'enzyme';
import TransactionsDashboardPage from '../../components/TransactionsDashboard';

test('should render TransactionDashboardPage correctly', () => {
  const wrapper = shallow(<TransactionsDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});