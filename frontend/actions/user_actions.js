import * as userAPIUtils from '../utils/user_API_utils';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
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

export const searchUsers = (searchTerm) => dispatch => {
    return userAPIUtils.searchUsers(searchTerm).then(
        users => dispatch(receiveUsers(users)),
        errors => dispatch(receiveErrors(errors))
    )
}

export const fetchRecipients = () => dispatch => {
    return userAPIUtils.fetchRecipients().then(
        users => dispatch(receiveUsers(users)),
        errors => dispatch(receiveErrors(errors))
    )
}