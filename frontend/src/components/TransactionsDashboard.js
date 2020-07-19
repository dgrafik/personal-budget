import React from 'react';
import TransactionList from './TransactionsList';
import TransactionsListFilters from './TransactionsListFilters'
import TransactionsSummary from './TransactionsSummary';

const TransactionDashboardPage = () => (
    <div>
        <TransactionsSummary />
        <TransactionsListFilters />
        <TransactionList />
    </div>
)

export default TransactionDashboardPage;