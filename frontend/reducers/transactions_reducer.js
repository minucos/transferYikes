import { RECEIVE_ALL_TRANSACTIONS, RECEIVE_TRANSACTION } from '../actions/transaction_actions';

const TransactionsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ALL_TRANSACTIONS:
            return action.transactions;

        case RECEIVE_TRANSACTION:
            return Object.assign({}, oldState, { [action.transaction.id]: action.transaction });

        default:
            return oldState;
    }
}

export default TransactionsReducer;