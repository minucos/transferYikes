import { connect } from 'react-redux';
import { createTransaction } from '../../actions/transaction_actions';
import { searchUsers } from '../../actions/user_actions';
import { fetchRates, fetchHistoricalData } from '../../actions/rate_actions';
import SendMoneyForm from './send_money_form';

const mapSTP = state => {

    return({
        currencies: ['USD', 'AUD', 'GBP', 'EUR', 'CAD', 'CNY', 'JPY'],
        rates: state.entities.rates.rates,
        base: state.entities.rates.base,
        users: state.entities.users,
        currentUserId: state.session.id,
        form: {
            name: '',
            description: '',
            sent_amount: 0,
            from_currency: 'USD',
            to_currency: 'USD',
            exchange_rate: 1
        }
    })
};

const mapDTP = dispatch => {
    return({
        createTransaction: (trans) => dispatch(createTransaction(trans)),
        searchUsers: (searchTerm) => dispatch(searchUsers(searchTerm)),
        fetchRates: (base) => dispatch(fetchRates(base)),
        fetchHistoricalData: (from, to) => dispatch(fetchHistoricalData(from,to))
    })
};

export default connect(mapSTP,mapDTP)(SendMoneyForm);