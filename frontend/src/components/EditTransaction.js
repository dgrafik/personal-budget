import React from 'react';
import { connect } from 'react-redux';
import TransactionForm from './TransactionForm';
import { startEditTransaction, startRemoveTransaction } from '../actions/transactions';

export class EditTransactionPage extends React.Component {
  onSubmit = (Transaction) => {
    this.props.startEditTransaction(this.props.Transaction.id, Transaction);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveTransaction({ id: this.props.Transaction.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Transaction</h1>
          </div>
        </div>
        <div className="content-container">
          <TransactionForm
            Transaction={this.props.Transaction}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove Transaction</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  Transaction: Object.entries(state.transactions).map(([key, value]) => {
    const reasult = value
    reasult.id = key
    return reasult
  }).find((transaction) => transaction.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditTransaction: (id, transaction) => dispatch(startEditTransaction(id, transaction)),
  startRemoveTransaction: ({ id }) => dispatch(startRemoveTransaction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTransactionPage);