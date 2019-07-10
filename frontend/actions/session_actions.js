import * as APIUtils from "../utils/session_API_utils";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = ({user, wallet, currencies}) => {
    return ({
        type: RECEIVE_CURRENT_USER,
        user: user,
        wallet: wallet,
        currencies: currencies
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

export const login = (user) => dispatch => {
    return APIUtils.login(user).then(
        payload => dispatch(receiveCurrentUser(payload)),
        errors => dispatch(receiveErrors(errors))
    )
};

export const signup = (user) => dispatch => {
    return APIUtils.signup(user).then(
        payload => dispatch(receiveCurrentUser(payload)),
        errors => dispatch(receiveErrors(errors))
    )
};
    
export const logout = () => dispatch => {
    return APIUtils.logout().then(
        () => dispatch(logoutCurrentUser())
    )
};