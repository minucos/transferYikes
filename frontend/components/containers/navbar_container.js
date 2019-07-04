import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = (state) => {
    const users = state.entities.users;
    const currentUserId = state.session.id;

    return ({
        currentUser: users[currentUserId]
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
