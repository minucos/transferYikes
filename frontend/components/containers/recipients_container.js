import { connect } from 'react-redux';
import { fetchAllTransactions } from '../../actions/transaction_actions';
import { selectUser } from '../../actions/ui_actions';
import { recentTransactions, sortTransactions } from '../../reducers/selectors';
import Recipients from './recipients';

const mapSTP = (state) => {

    return({
        recipients: Object.values(state.entities.users)
            .filter(user => user.id !== state.session.id),
        transactions: recentTransactions(
            state.entities.users,sortTransactions(state).reverse()
        ),
        currentUserId: state.session.id
    })
}

const mapDTP = (dispatch) => ({
    fetchAllTransactions: () => dispatch(fetchAllTransactions()),
    selectUser: (userId) => dispatch(selectUser(userId)),
});

export default connect(mapSTP,mapDTP)(Recipients);


