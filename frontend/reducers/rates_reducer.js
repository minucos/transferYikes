import { RECEIVE_RATES } from "../actions/rate_actions";

const RatesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_RATES:
            let newState = action.payload;
            
            newState.rates[newState.base] = 1;

            return newState;

        default:
            return oldState;
    }
};

export default RatesReducer;
