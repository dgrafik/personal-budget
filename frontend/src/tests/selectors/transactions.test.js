import moment from 'moment';
import selectTransactions from '../../selectors/transactions';
import transactions from '../fixtures/transactions';

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectTransactions(transactions, filters);
  expect(result).toEqual([transactions['3'], transactions['2']]);
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const result = selectTransactions(transactions, filters);
  expect(result).toEqual([transactions['3'], transactions['1']]);
});

test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  };
  const result = selectTransactions(transactions, filters);
  expect(result).toEqual([transactions['1'], transactions['2']]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectTransactions(transactions, filters);
  expect(result).toEqual([transactions['3'], transactions['1'], transactions['2']]);
});

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectTransactions(transactions, filters);
  expect(result).toEqual([transactions['2'], transactions['3'], transactions['1']]);
});