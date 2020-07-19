import moment from 'moment';

// Get visible transactions

export default (transactions, { text, sortBy, startDate, endDate }) => {
  const transactionsList = Object.entries(transactions).map(([key, value]) => {
    const reasult = value
    reasult.id = key
    return reasult
})
  return transactionsList.filter((transaction) => {
    const createdAtMoment = moment(transaction.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = transaction.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    } else {
      return 0
    }
  });
};