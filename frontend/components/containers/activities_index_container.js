import { connect } from 'react-redux';
import { fetchAllTransactions } from '../../actions/transaction_actions';
import ActivitiesIndex from './activities_index';

const mapSTP = (state) => {
    return ({
        transactions: Object.values(state.entities.transactions),
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users
    })
};

const mspDTP = (dispatch) => ({
    fetchAllTransactions: () => dispatch(fetchAllTransactions()),
});

export default connect(mapSTP,mspDTP)(ActivitiesIndex);