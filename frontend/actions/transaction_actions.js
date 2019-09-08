import * as TransAPI from '../utils/transaction_API_utils';

export const RECEIVE_ALL_TRANSACTIONS = 'RECEIVE_ALL_TRANSACTIONS';
export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';
export const RECEIVE_TRANSACTION_ERRORS = 'RECEIVE_TRANSACTION_ERRORS';

const receiveAllTransactions = ({ transactions, users }) => ({
    type: RECEIVE_ALL_TRANSACTIONS,
    transactions,
    users
});

const receiveTransaction = (transaction) => ({
    type: RECEIVE_TRANSACTION,
    transaction
});

const receiveErrors = (errors) => ({
    type: RECEIVE_TRANSACTION_ERRORS,
    errors
});

export const fetchAllTransactions = () => (dispatch) => {
    return TransAPI.fetchTransactions().then(
        payload => dispatch(receiveAllTransactions(payload)),
        errors => dispatch(receiveErrors(errors))
    );
};

export const createTransaction = (transaction) => (dispatch) => {
    return TransAPI.createTransaction(transaction).then(
        transaction => dispatch(receiveTransaction(transaction)),
        errors => dispatch(receiveErrors(errors))
    );
};

export const depositTransaction = (transaction) => (dispatch) => {
    return TransAPI.depositTransaction(transaction).then(
        transaction => dispatch(receiveTransaction(transaction)),
        errors => dispatch(receiveErrors(errors))
    );
};

