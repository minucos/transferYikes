import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_ALL_TRANSACTIONS, RECEIVE_TRANSACTION } from "../actions/transaction_actions";

const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, action.user);

        case RECEIVE_USER:
            return Object.assign({}, oldState, action.user);

        case RECEIVE_USERS:
            return action.users;

        case RECEIVE_ALL_TRANSACTIONS:
            return Object.assign({}, oldState, action.users);

        case RECEIVE_TRANSACTION:
            return Object.assign({}, oldState, action.users);

        case LOGOUT_CURRENT_USER:
            return {};

        default:
            return oldState;
    }
};

export default UsersReducer;