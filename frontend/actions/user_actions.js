import * as userAPIUtils from '../utils/user_API_utils';
import { RECEIVE_SESSION_ERRORS } from './session_actions';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUser = ({user, wallet}) => ({
    type: RECEIVE_USER,
    user: user,
    wallet: wallet
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