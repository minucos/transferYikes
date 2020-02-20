import * as APIUtils from "../utils/session_API_utils";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

const receiveCurrentUser = (user) => {
    return ({
        type: RECEIVE_CURRENT_USER,
        user: user
    })
};

const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_CURRENT_USER
    })
};

const receiveErrors = (errors) => {
    return ({
        type: RECEIVE_SESSION_ERRORS,
        errors: errors
    })
};

export const clearErrors = () => {
    return ({
        type: CLEAR_SESSION_ERRORS
    })
};

export const login = (user) => dispatch => {
    return APIUtils.login(user).then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors))
    )
};

export const signup = (user) => dispatch => {
    return APIUtils.signup(user).then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors))
    )
};
    
export const logout = () => dispatch => {
    return APIUtils.logout().then(
        () => dispatch(logoutCurrentUser())
    )
};