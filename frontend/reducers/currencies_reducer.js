import { RECEIVE_ALL_CURRENCIES, RECEIVE_CURRENCY } from '../actions/currency_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_WALLET } from '../actions/wallet_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const CurrenciesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    let newState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = Object.assign({}, oldState, action.currencies);

            return newState;
        
        case RECEIVE_WALLET:
            newState = Object.assign({}, oldState, action.currencies);

            return newState;

        case RECEIVE_USER:
            newState = Object.assign({},oldState, action.currencies);

            return newState;

        case RECEIVE_ALL_CURRENCIES:
            newState = Object.assign({}, oldState, action.currencies);

            return newState;

        case RECEIVE_CURRENCY:
            newState = Object.assign({}, oldState, action.currency);

            return newState;

        default:
            return oldState;
    }
};

export default CurrenciesReducer;