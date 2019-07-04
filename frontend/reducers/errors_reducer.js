import { combineReducers } from 'redux';
import SessionsErrorsReducer from './sessions_errors_reducer';

const ErrorsReducer = combineReducers({
    session: SessionsErrorsReducer,
})

export default ErrorsReducer;