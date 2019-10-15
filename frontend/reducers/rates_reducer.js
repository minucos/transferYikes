import { RECEIVE_RATES, RECEIVE_HISTORICAL_DATA } from "../actions/rate_actions";

const _base = {
    base: 'USD',
    rates: {
        'USD': 1
    }
}

const RatesReducer = (oldState = _base, action) => {
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
