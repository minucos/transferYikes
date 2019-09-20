import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const SessionReducer = (oldState = { id: null }, action) => {
    Object.freeze(oldState);

    switch (action.type) { 
        case RECEIVE_CURRENT_USER:
            debugger
            const userId = Object.values(action.user)[0].id;
            
            return { id: userId};

        case LOGOUT_CURRENT_USER:
            return { id: null };

        default:
            return oldState;
    }
};

export default SessionReducer;