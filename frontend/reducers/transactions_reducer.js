import { RECEIVE_ALL_TRANSACTIONS, RECEIVE_TRANSACTION, CLEAR_TRANSACTIONS } from '../actions/transaction_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const TransactionsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ALL_TRANSACTIONS:
            return action.transactions;

        case RECEIVE_TRANSACTION:
            return Object.assign({}, oldState, action.transaction);

        case CLEAR_TRANSACTIONS:
            return {};

        case LOGOUT_CURRENT_USER:
            return {};

        default:
            return oldState;
    }
}

export default TransactionsReducer;