import { connect } from 'react-redux';
import { createTransaction } from '../../actions/transaction_actions';
import { searchUsers } from '../../actions/user_actions';
import { clearSelections } from '../../actions/ui_actions';
import { fetchRate, fetchHistoricalData } from '../../actions/rate_actions';
import SendMoneyForm from './send_money_form';

const mapSTP = state => {

    const from = state.entities.rates.base;
    const to = Object.keys(state.entities.rates.rates)[0];
    const rate = Object.values(state.entities.rates.rates)[0]
    const receiver = state.ui.selectedUser;
    const currency = state.ui.selectedCurrency
    return({
        users: state.entities.users,
        currentUserId: state.session.id,
        from,
        to,
        rate,
        receiver: receiver ? receiver : '',
        currency: currency ? currency : 'USD',
        errors: state.errors.transaction
    })
};

const mapDTP = dispatch => {
    return({
        createTransaction: (trans) => dispatch(createTransaction(trans)),
        searchUsers: (searchTerm) => dispatch(searchUsers(searchTerm)),
        fetchRate: (from, to) => dispatch(fetchRate(from, to)),
        fetchHistoricalData: (from, to) => dispatch(fetchHistoricalData(from, to)),
        clearSelections: () => dispatch(clearSelections)
    })
};

export default connect(mapSTP,mapDTP)(SendMoneyForm);