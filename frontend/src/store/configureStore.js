import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import transactionsReducer from '../reducers/transactions';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {

    const appReducer = combineReducers({
        transactions: transactionsReducer,
        filters: filtersReducer
    })
    const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));
    return store
}