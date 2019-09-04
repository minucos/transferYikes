import { RECEIVE_BALANCES } from '../actions/wallet_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const BalancesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_USER:
            let newState = {};

            action.balances.forEach(balance => {
                let currency = Object.keys(balance)[0];

                newState[currency] = balance[currency];
            });
            return newState;

        default:
            return oldState;
    }
}

export default BalancesReducer;