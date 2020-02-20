import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from '../containers/session_form';

const mapStateToProps = (state) => {
    let errors = state.errors.session;

    return ({
        errors: errors,
        formType: "login"
    })
};

const mapDistatchToProps = (dispatch) => {
    return ({
        processForm: (user) => dispatch(login(user)),
        processDemo: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    })
}

export default connect(mapStateToProps,mapDistatchToProps)(SessionForm)