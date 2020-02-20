import { 
    RECEIVE_CURRENT_USER, 
    RECEIVE_SESSION_ERRORS,
    CLEAR_SESSION_ERRORS 
} from "../actions/session_actions";

const errorMessages = {
    "Email can't be blank": 'email',
    "Name can't be blank": 'name',
    "Password is too short (minimum is 6 characters)": 'password'
}

const SessionsErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    let newState = {};
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            if (action.errors.responseText === '["Invalid Credentials"]') {
                newState['email'] = 'Invalid email or password';
                newState['password'] = 'Invalid email or password';
            } else {
                action.errors.responseJSON.forEach(error => {
                    let key = errorMessages[error];
                    newState[key] = error;
                })
            }

            return newState;
        
        case CLEAR_SESSION_ERRORS:
            return [];

        case RECEIVE_CURRENT_USER:
            return [];

        default:
            return oldState;
    }
};

export default SessionsErrorsReducer;