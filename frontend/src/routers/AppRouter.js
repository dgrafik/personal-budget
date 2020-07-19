import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TransactionDashboardPage from '../components/TransactionsDashboard';
import AddTransactionPage from '../components/AddTransaction';
import EditExpansePage from '../components/EditTransaction';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={TransactionDashboardPage} exact={true} />
                <Route path="/create" component={AddTransactionPage} />
                <Route path="/edit/:id" component={EditExpansePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;