import { RECEIVE_RATES, RECEIVE_HISTORICAL_DATA } from "../actions/rate_actions";

const RatesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    let newState;
    switch (action.type) {
        case RECEIVE_RATES:
            newState = action.payload;
            
            newState.rates[newState.base] = 1;

            return newState;

        case RECEIVE_HISTORICAL_DATA:
            newState = Object.assign({}, oldState, { historical: action.payload });

            return newState;

        default:
            return oldState;
    }
};

export default RatesReducer;
