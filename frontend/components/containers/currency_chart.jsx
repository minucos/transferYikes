import React from 'react';
import Chart from 'chart.js';

class CurrencyChart extends React.Component {

    constructor(props) {
        super(props);
        // debugger
        this.state = {
            options: this.props.options,
        };
    };

    componentDidMount() {
        let ctx = document.getElementById('chart-container').getContext('2d');
        this.setState({
            chart: new Chart(ctx, this.state.options),
        })
    }

    componentDidUpdate() {
        this.state.chart.render();
    }

    componentWillUnmount() {
        this.state.chart.destroy();
    }

    render() {
        return(
            <div>
                <h1>some sort of chart...</h1>
                <canvas id="chart-container"></canvas>
                <span id="timeToRender"></span>
            </div>
        )
    };
};

export default CurrencyChart;