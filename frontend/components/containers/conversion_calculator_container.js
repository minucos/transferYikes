import { connect } from 'react-redux';
import { fetchRates } from "../../actions/rate_actions";
import { userRates } from "../../reducers/selectors";
import ConversionCalculator from './conversion_calculator';

const mapSTP = (state) => {

    return({
        currencies: ['USD', 'AUD', 'GBP', 'EUR', 'CAD', 'CNY', 'JPY', 'XBT'],
        rates: state.entities.rates.rates,
        base: state.entities.rates.base
    })
};

const mapDTP = (dispatch) => {

    return({
        fetchRates: (base) => dispatch(fetchRates(base))
    })
};

export default connect(mapSTP, mapDTP)(ConversionCalculator);