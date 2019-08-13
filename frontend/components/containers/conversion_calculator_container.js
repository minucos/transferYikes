import { connect } from 'react-redux';
import ConversionCalculator from './conversion_calculator';

const mapSTP = (state) => {

    return({
        currencies: ['USD', 'AUD', 'GBP', 'EUR', 'CAD', 'CNY', 'JPY', 'XBT']
    })
};

const mapDTP = (dispatch) => {

    return({

    })
};

export default connect(mapSTP, mapDTP)(ConversionCalculator);