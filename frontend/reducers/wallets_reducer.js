import { RECEIVE_WALLET } from '../actions/wallet_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const WalletsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_WALLET:
            return action.wallet;
        
        case RECEIVE_CURRENT_USER:
            return action.wallet;

        case RECEIVE_USER:
            return action.wallet;

        default:
            return oldState;
    }
}

export default WalletsReducer;