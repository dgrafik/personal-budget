import selectTransactionsTotal from '../../selectors/transactions-total';
import transactions from '../fixtures/transactions';

test('should return 0 if no Transactions', () => {
  const res = selectTransactionsTotal({});
  expect(res).toBe(0);
});

test('should correctly add up a single Transaction', () => {
  const res = selectTransactionsTotal({'1': transactions['1']});
  expect(res).toBe(195);
});

test('should correctly add up multiple Transactions', () => {
  const res = selectTransactionsTotal(transactions);
  expect(res).toBe(114195);
});