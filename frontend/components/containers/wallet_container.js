import { connect } from 'react-redux';
import { fetchUser, receiveCurrency } from '../../actions/user_actions';
import Wallet from './wallet';

const mapSTP = (state) => {
    let userId = state.session.id;

    return ({
        balances: state.entities.balances,
        defaultCurrency: "USD",
        userId: userId
    })
};

const mapDTP = (dispatch) => {
    return ({
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        receiveCurrency: (userId, currencyType, amount) => dispatch(receiveCurrency(userId, currencyType, amount))
    })
}

export default connect(mapSTP,mapDTP)(Wallet);