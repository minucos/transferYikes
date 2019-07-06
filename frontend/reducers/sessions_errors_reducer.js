import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from "../actions/session_actions";

const SessionsErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    let newState;

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors.responseJSON

        case RECEIVE_CURRENT_USER:
            return [];

        default:
            return oldState;
    }
};

export default SessionsErrorsReducer;