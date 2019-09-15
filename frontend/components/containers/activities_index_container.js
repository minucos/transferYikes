import { connect } from 'react-redux';
import { fetchTransactions } from '../../actions/transaction_actions';
import ActivitiesIndex from './activities_index';
import { sortTransactions } from '../../reducers/selectors';
import { fetchUser } from '../../actions/user_actions';

const mapSTP = (state) => {
    let transactions = sortTransactions(state);

    return ({
        transactions: transactions,
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
        currentUserId: state.session.id
    })
};

const mspDTP = (dispatch) => ({
    fetchTransactions: (page) => dispatch(fetchTransactions(page)),
    fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(mapSTP,mspDTP)(ActivitiesIndex);