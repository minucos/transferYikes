import { combineReducers } from 'redux';
import SessionsErrorsReducer from './sessions_errors_reducer';
import UsersErrorsReducer from './users_errors_reducer';
import TransactionsErrorsReducer from './trans_errors_reducer';

const ErrorsReducer = combineReducers({
    session: SessionsErrorsReducer,
    user: UsersErrorsReducer,
    transaction: TransactionsErrorsReducer,
})

export default ErrorsReducer;