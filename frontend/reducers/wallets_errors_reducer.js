import { RECEIVE_WALLET_ERRORS } from "../actions/wallet_actions";

const WalletsErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_WALLET_ERRORS:
            return action.errors.responseJSON

        default:
            return oldState;
    }
};

export default WalletsErrorsReducer;