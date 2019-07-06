import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import WalletsReducer from './wallets_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    wallets: WalletsReducer
})

export default EntitiesReducer;