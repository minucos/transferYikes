import * as RatesAPI from '../utils/rates_API_utils';

export const RECEIVE_RATES = "RECEIVE_RATES";

const receiveRates = (payload) => {

    return({
        type: RECEIVE_RATES,
        payload
    })
}

const receiveErrors = (errors) => {

    return({
        type: RECEIVE_RATE_ERRORS,
        errors
    })
}

export const fetchRates = (base) => dispatch => {
    return RatesAPI.fetchRates(base).then
        ( payload => dispatch(receiveRates(payload)),
          errors => dispatch(receiveErrors(errors))  
        )
}