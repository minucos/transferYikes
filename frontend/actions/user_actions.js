import * as userAPIUtils from '../utils/user_API_utils';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUser = ({user, transactions}) => ({
    type: RECEIVE_USER,
    user,
    transactions
})

const receiveErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors: errors
})

export const fetchUser = (userId) => dispatch => {
    return userAPIUtils.fetchUser(userId).then( 
            payload => dispatch(receiveUser(payload)),
            errors => dispatch(receiveErrors(errors)),
        )
}

export const receiveCurrency = (userId, currencyType, amount) => dispatch => {
    return userAPIUtils.receiveCurrency(userId, currencyType, amount).then( 
            payload => dispatch(receiveUser(payload)),
            errors => dispatch(receiveErrors(errors)),
        )
}