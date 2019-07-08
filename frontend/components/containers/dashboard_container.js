import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import Dashboard from './dashboard';

const mapStateToProps = (state) => {
    const userId = state.session.id;

    return ({
        userId: userId,
        user: state.entities.users[userId],
        wallet: Object.values(state.entities.wallets)[0],
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchUser: userId => dispatch(fetchUser(userId)),
        logout: () => dispatch(logout()),
    })
};

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);

