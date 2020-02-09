import { connect } from 'react-redux';
import { fetchRates, fetchHistoricalData } from "../../actions/rate_actions";
import { openModal } from "../../actions/modal_actions";
import ConversionCalculator from './conversion_calculator';

const mapSTP = (state) => {

    return({
        currencies: ['USD', 'AUD', 'GBP', 'EUR', 'CAD', 'CNY', 'JPY'],
        rates: state.entities.rates.rates,
        base: state.entities.rates.base
    })
};

const mapDTP = (dispatch) => {

    return({
        fetchRates: (base) => dispatch(fetchRates(base)),
        fetchHistoricalData: (from, to) => dispatch(fetchHistoricalData(from,to)),
        openModal: () => dispatch(openModal()),
    })
};

export default connect(mapSTP, mapDTP)(ConversionCalculator);