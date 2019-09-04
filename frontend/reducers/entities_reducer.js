import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import BalancesReducer from './wallets_reducer';
import CurrenciesReducer from './currencies_reducer';
import RatesReducer from './rates_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    balances: BalancesReducer,
    currencies: CurrenciesReducer,
    rates: RatesReducer,
})

export default EntitiesReducer;