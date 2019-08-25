import { connect } from 'react-redux';
import { chartData, chartOptions, toCurrency } from '../../reducers/selectors';
import CurrencyChart from './currency_chart';

const mapSTP = (state) => {
    const data = chartData(state);
    const options = chartOptions(data, state);

    return({
        options: options,
        from: state.entities.rates.base,
        to: toCurrency(state),
        labels: options.data.labels,
    })
}

export default connect(mapSTP,null)(CurrencyChart);