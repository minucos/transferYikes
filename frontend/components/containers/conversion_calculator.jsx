import React from 'react';
import * as RatesAPI from '../../utils/rates_API_utils';

class ConversionCalculator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            toCurrency: "USD",
            fromCurrency: "USD",
            rate: 1.0000,
            fees: 0.00
        }

        this.symbols = {
            "USD": "$",
            "AUD": "$",
            "GBP": "£",
            "EUR": "€",
            "CAD": "$",
            "CNY": "¥",
            "JPY": "¥",
            "XBT": "₿"
        }
    }

    componentDidMount() {
        RatesAPI.fetchRates().then( response => console.log(response) )
    }


    render() {
        let { rate, fees, toCurrency, fromCurrency} = this.state;
        return(
            <div className="calculator">
                <div className="label">You send</div>
                <div className="from-div">
                    <input className="from-amount" type="float"/>
                    <select className="currency-dropdown" name="" id="from-dropdown">
                        <option value="USD">🇺🇸 USD</option>
                        <option value="AUD">🇦🇺 AUD</option>
                        <option value="GBP">🇬🇧 GBP</option>
                        <option value="EUR">🇪🇺 EUR</option>
                        <option value="CAD">🇨🇦 CAD</option>
                        <option value="CNY">🇨🇳 CNY</option>
                        <option value="JPY">🇯🇵 JPY</option>
                        <option value="XBT">🏴‍☠️ XBT</option>
                    </select>
                </div>
                <div className="rates-div">
                    <ul>
                        <li><span>◉</span>calculation</li>
                        <li><span>◉</span>{this.symbols[fromCurrency]}{fees} {fromCurrency} Total Fees</li>
                        <li><span>◉</span>{rate} your exchange rate</li>
                    </ul>
                </div>
                <div className="label">Recipient gets</div>
                <div className="to-div">
                    <input className="from-amount" type="float" />
                    <select className="currency-dropdown" name="" id="">
                        <option value="USD">🇺🇸 USD</option>
                        <option value="AUD">🇦🇺 AUD</option>
                        <option value="GBP">🇬🇧 GBP</option>
                        <option value="EUR">🇪🇺 EUR</option>
                        <option value="CAD">🇨🇦 CAD</option>
                        <option value="CNY">🇨🇳 CNY</option>
                        <option value="JPY">🇯🇵 JPY</option>
                        <option value="XBT">🏴‍☠️ XBT</option>
                    </select>
                </div>
                <div className="savings-div">

                </div>
                <div className="buttons-div">

                </div>
            </div>
        )
    }
}

// ['USD', 'AUD', 'GBP', 'EUR', 'CAD', 'CNY', 'JPY', 'XBT']

export default ConversionCalculator;