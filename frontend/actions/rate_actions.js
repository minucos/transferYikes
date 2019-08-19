import * as RatesAPI from '../utils/rates_API_utils';

export const RECEIVE_RATES = "RECEIVE_RATES";
export const RECEIVE_HISTORICAL_DATA = "RECEIVE_HISTORICAL_DATA";

const receiveRates = (payload) => {

    return({
        type: RECEIVE_RATES,
        payload
    })
}

const receiveHistoricalData = (payload) => {

    return({
        type: RECEIVE_HISTORICAL_DATA,
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

export const fetchHistoricalData = (from, to) => dispatch => {
    return RatesAPI.fetchHistoricalData(from,to).then
        (payload => dispatch(receiveHistoricalData(payload)),
          errors => dispatch(receiveErrors(errors))  
        )
}