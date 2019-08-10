import { connect } from 'react-redux';
import { fetchUser, receiveCurrency } from '../../actions/user_actions';
import { userWallet, userCurrencies } from '../../reducers/selectors';
import Wallet from './wallet';

const mapSTP = (state) => {
    let userId = state.session.id;
    let walletId = Object.values(state.entities.wallets)[0].id;

    return ({
        wallet: userWallet(state, userId),
        currencies: userCurrencies(state, walletId),
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