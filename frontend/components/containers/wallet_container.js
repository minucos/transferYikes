import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchAllTransactions, depositTransaction } from '../../actions/transaction_actions';
import { calculateBalances } from '../../reducers/selectors';
import Wallet from './wallet';

const mapSTP = (state) => {
    let userId = state.session.id;

    return ({
        balances: calculateBalances(state),
        defaultCurrency: "USD",
        userId: userId
    })
};

const mapDTP = (dispatch) => {
    return ({
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchAllTransactions: () => dispatch(fetchAllTransactions()),
        depositTransaction: (trans) => dispatch(depositTransaction(trans))
    })
}

export default connect(mapSTP,mapDTP)(Wallet);