import { connect } from 'react-redux';
import { chartData, chartOptions } from '../../reducers/selectors';
import CurrencyChart from './currency_chart';

const mapSTP = (state) => {
    const data = chartData(state);
    const options = chartOptions(data, state);

    return({
        options: options,
    })
}

export default connect(mapSTP,null)(CurrencyChart);