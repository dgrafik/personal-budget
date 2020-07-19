export default (transactions) => {
    const TransactionsList = Object.entries(transactions).map(([key, value]) => {
        const reasult = value
        reasult.id = key
        return reasult
    })
    console.log(TransactionsList)
    return TransactionsList
        .map((transaction) => transaction.amount)
        .reduce((sum, value) => sum + value, 0);
  };