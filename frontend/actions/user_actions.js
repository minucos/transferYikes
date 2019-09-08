import * as userAPIUtils from '../utils/user_API_utils';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

const receiveErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors: errors
})

export const fetchUser = (userId) => dispatch => {
    return userAPIUtils.fetchUser(userId).then( 
            user => dispatch(receiveUser(user)),
            errors => dispatch(receiveErrors(errors)),
        )
}