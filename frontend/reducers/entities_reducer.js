import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import TransactionsReducer from './transactions_reducer';
import RatesReducer from './rates_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    transactions: TransactionsReducer,
    rates: RatesReducer,
})

export default EntitiesReducer;