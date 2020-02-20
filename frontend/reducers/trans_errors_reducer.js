import {
  RECEIVE_TRANSACTION,
  RECEIVE_TRANSACTION_ERRORS,
} from "../actions/transaction_actions";

const errorMessages = {
  "Receiver can't be blank": 'receiver_id',
  "Name can't be blank": 'name',
  "Amount must be more than zero": 'amount'
}

const TransactionsErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  let newState = {};
  switch (action.type) {
    case RECEIVE_TRANSACTION_ERRORS:
      action.errors.responseJSON.forEach(error => {
        let key = errorMessages[error];
        newState[key] = error;
      })

      return newState;

    case RECEIVE_TRANSACTION:
      return [];

    default:
      return oldState;
  }
};

export default TransactionsErrorsReducer;