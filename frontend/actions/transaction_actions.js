import * as TransAPI from '../utils/transaction_API_utils';

export const RECEIVE_ALL_TRANSACTIONS = 'RECEIVE_ALL_TRANSACTIONS';
export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';
export const CLEAR_TRANSACTIONS = "CLEAR_TRANSACTIONS";
export const RECEIVE_TRANSACTION_ERRORS = 'RECEIVE_TRANSACTION_ERRORS';

const receiveAllTransactions = ({ transactions, users }) => ({
    type: RECEIVE_ALL_TRANSACTIONS,
    transactions,
    users
});

const receiveTransaction = ({transaction, users}) => {
    return({
        type: RECEIVE_TRANSACTION,
        transaction,
        users
    });
}

export const clearTransactions = (id) => ({
    type: CLEAR_TRANSACTIONS,
    id
})

const receiveErrors = (errors) => ({
    type: RECEIVE_TRANSACTION_ERRORS,
    errors
});

export const fetchTransactions = (page) => (dispatch) => {
    return TransAPI.fetchTransactions(page).then(
        payload => dispatch(receiveAllTransactions(payload)),
        errors => dispatch(receiveErrors(errors))
    );
};

export const fetchAllTransactions = () => (dispatch) => {
    return TransAPI.fetchAllTransactions().then(
        payload => dispatch(receiveAllTransactions(payload)),
        errors => dispatch(receiveErrors(errors))
    );
};
export const createTransaction = (transaction) => (dispatch) => {
    return TransAPI.createTransaction(transaction).then(
        payload => dispatch(receiveTransaction(payload)),
        errors => dispatch(receiveErrors(errors))
    );
};

export const depositTransaction = (transaction) => (dispatch) => {
    return TransAPI.depositTransaction(transaction).then(
        transaction => dispatch(receiveTransaction(transaction)),
        errors => dispatch(receiveErrors(errors))
    );
};

