import { combineReducers } from 'redux';
import DisplayUIReducer from './display_ui_reducer';
import ModalReducer from './modal_reducer';
import SelectedUserReducer from './user_ui_reducer';
import SelectedCurrencyReducer from './currency_ui_reducer';

const UIReducer = combineReducers({
    display: DisplayUIReducer,
    modal: ModalReducer,
    selectedUser: SelectedUserReducer,
    selectedCurrency: SelectedCurrencyReducer,
})

export default UIReducer;