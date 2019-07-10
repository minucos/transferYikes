import { RECEIVE_UI_DISPLAY } from '../actions/ui_actions';

const UIReducer = (oldState = { display: 'Activity'}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_UI_DISPLAY:
            return { display: action.view }
        default:
            return oldState;
    }
};

export default UIReducer;