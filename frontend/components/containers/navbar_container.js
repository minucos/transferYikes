import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {
    const users = state.entities.users;
    const currentUserId = state.session.id;

    return ({
        currentUser: users[currentUserId],
        currentUserId
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
        fetchCurrentUser: (id) => dispatch(fetchUser(id))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
