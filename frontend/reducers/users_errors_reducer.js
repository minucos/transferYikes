import { RECEIVE_USER_ERRORS } from "../actions/user_actions";

const UsersErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            return action.errors

        default:
            return oldState;
    }
};

export default UsersErrorsReducer;