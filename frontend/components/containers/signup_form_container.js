import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SessionForm  from '../containers/session_form';

const mapStateToProps = (state) => {
    let errors = state.errors.session;

    return ({
        errors: errors,
        formType: "signup"
    })
};

const mapDistatchToProps = (dispatch) => {
    return ({
        processForm: (user) => dispatch(signup(user)),
        processDemo: (user) => dispatch(login(user)),
    })
}

export default connect(mapStateToProps, mapDistatchToProps)(SessionForm)