import { RECEIVE_UI_DISPLAY } from '../actions/ui_actions';

const DisplayUIReducer = (oldState = 'Wallet', action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_UI_DISPLAY:
            return action.view
        default:
            return oldState;
    }
};

export default DisplayUIReducer;