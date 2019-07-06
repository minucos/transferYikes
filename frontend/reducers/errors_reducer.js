import { combineReducers } from 'redux';
import SessionsErrorsReducer from './sessions_errors_reducer';
import WalletsErrorsReducer from './wallets_errors_reducer';

const ErrorsReducer = combineReducers({
    session: SessionsErrorsReducer,
    wallet: WalletsErrorsReducer
})

export default ErrorsReducer;