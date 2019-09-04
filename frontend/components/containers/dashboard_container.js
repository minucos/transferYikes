import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import Dashboard from './dashboard';

const mapStateToProps = (state) => {
    const userId = state.session.id;

    return ({
        userId: userId,
        user: state.entities.users[userId],
        balances: state.entities.balances,
        heading: state.ui.display
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchUser: userId => dispatch(fetchUser(userId)),
        logout: () => dispatch(logout()),
    })
};

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);

