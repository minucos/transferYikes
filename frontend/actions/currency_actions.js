import * as currencyAPIUtils from '../utils/currency_API_utils';

export const RECEIVE_ALL_CURRENCIES = "RECEIVE_ALL_CURRENCIES";
export const RECEIVE_CURRENCY = "RECEIVE_CURRENCY";

const receiveAllCurrencies = (currencies) => ({
    type: RECEIVE_ALL_CURRENCIES,
    currencies: currencies
})

const receiveCurrency = (currency) => ({
    type: RECEIVE_CURRENCY,
    currency: currency
})

export const fetchCurrencies = () => dispatch => {
    return currencyAPIUtils.fetchCurrencies()
        .then(
            currencies => dispatch(receiveAllCurrencies(currencies))
        )
}

export const fetchCurrency = (id) => dispatch => {
    return currencyAPIUtils.fetchCurrency(id)
        .then(
            currency => dispatch(receiveCurrency(currency))
        )
}

export const createCurrency = (currency) => dispatch => {
    return currencyAPIUtils.createCurrency(currency)
        .then(
            currency => dispatch(receiveCurrency(currency))
        )
}

export const updateCurrency = (currency) => dispatch => {
    return currencyAPIUtils.updateCurrency(currency)
        .then(
            currency => dispatch(receiveCurrency(currency))
        )
}


