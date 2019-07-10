import { combineReducers } from 'redux';
import SessionsReducer from './sessions_reducer';
import EntitiesReducer from "./entities_reducer";
import ErrorsReducer from './errors_reducer';
import UIReducer from './ui_reducer';

const RootReducer = combineReducers({
    entities: EntitiesReducer,
    session: SessionsReducer,
    errors: ErrorsReducer,
    ui: UIReducer,
})

export default RootReducer;