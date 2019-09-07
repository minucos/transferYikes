import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import BalancesReducer from './wallets_reducer';
import RatesReducer from './rates_reducer';
// import CurrenciesReducer from './currencies_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    balances: BalancesReducer,
    rates: RatesReducer,
})

export default EntitiesReducer;