import { connect } from 'react-redux';
import { createTransaction } from '../../actions/transaction_actions';
import { searchUsers } from '../../actions/user_actions';
import { fetchRate, fetchHistoricalData } from '../../actions/rate_actions';
import SendMoneyForm from './send_money_form';

const mapSTP = state => {

    const from = state.entities.rates.base;
    const to = Object.keys(state.entities.rates.rates)[0];
    const rate = Object.values(state.entities.rates.rates)[0]

    return({
        users: state.entities.users,
        currentUserId: state.session.id
    })
};

const mapDTP = dispatch => {
    return({
        createTransaction: (trans) => dispatch(createTransaction(trans)),
        searchUsers: (searchTerm) => dispatch(searchUsers(searchTerm)),
        fetchRate: (from, to) => dispatch(fetchRate(from, to)),
        fetchHistoricalData: (from, to) => dispatch(fetchHistoricalData(from, to))
    })
};

export default connect(mapSTP,mapDTP)(SendMoneyForm);