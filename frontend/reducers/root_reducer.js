import { combineReducers } from 'redux';
import SessionsReducer from './sessions_reducer';
import EntitiesReducer from "./entities_reducer";
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
    entities: EntitiesReducer,
    session: SessionsReducer,
    errors: ErrorsReducer
})

export default RootReducer;