import { combineReducers } from 'redux';
import SessionsErrorsReducer from './sessions_errors_reducer';
import WalletsErrorsReducer from './wallets_errors_reducer';
import UsersErrorsReducer from './users_errors_reducer';

const ErrorsReducer = combineReducers({
    session: SessionsErrorsReducer,
    wallet: WalletsErrorsReducer,
    user: UsersErrorsReducer,
})

export default ErrorsReducer;