import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { 
    fetchAllTransactions,
    depositTransaction,
    clearTransactions } 
from '../../actions/transaction_actions';
import { selectCurrency } from '../../actions/ui_actions';
import { calculateBalances } from '../../reducers/selectors';
import Balance from './balance';

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
        depositTransaction: (trans) => dispatch(depositTransaction(trans)),
        clearTransactions: (id) => dispatch(clearTransactions(id)),
        selectCurrency: (currency) => dispatch(selectCurrency(currency))
    })
}

export default connect(mapSTP,mapDTP)(Balance);