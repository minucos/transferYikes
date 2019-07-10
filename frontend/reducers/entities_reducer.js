import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import WalletsReducer from './wallets_reducer';
import CurrenciesReducer from './currencies_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    wallets: WalletsReducer,
    currencies: CurrenciesReducer
})

export default EntitiesReducer;