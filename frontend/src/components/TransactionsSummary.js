import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectTransactions from '../selectors/transactions';
import selectTransactionsTotal from '../selectors/transactions-total';

export const TransactionsSummary = ({ TransactionCount, TransactionsTotal }) => {
  const TransactionWord = TransactionCount === 1 ? 'transaction' : 'transactions' ;
  const formattedTransactionsTotal = numeral(TransactionsTotal).format('$0,0.00');
  
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{TransactionCount}</span> {TransactionWord} totalling <span>{formattedTransactionsTotal}</span></h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Transaction</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleTransactions = selectTransactions(state.transactions, state.filters);

  return {
    TransactionCount: visibleTransactions.length,
    TransactionsTotal: selectTransactionsTotal(visibleTransactions)
  };
};

export default connect(mapStateToProps)(TransactionsSummary);