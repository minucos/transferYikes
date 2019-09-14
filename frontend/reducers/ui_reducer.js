import { combineReducers } from 'redux';
import DisplayUIReducer from './display_ui_reducer';
import ModalReducer from './modal_reducer';

const UIReducer = combineReducers({
    display: DisplayUIReducer,
    modal: ModalReducer,
})

export default UIReducer;