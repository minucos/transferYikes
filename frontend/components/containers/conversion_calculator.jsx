import React from 'react';

class ConversionCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toCurrency: "USD",
            toAmount: 0,
            fromCurrency: "USD",
            fromAmount: 0,
            rates: { "USD": 1 },
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
        this.props.fetchRates(this.state.fromCurrency);
        this.props.fetchHistoricalData(this.state.fromCurrency, this.state.toCurrency);
    }

    updateAmount(field) {
        if (field == "toAmount") {
            let { rates, toCurrency } = this.state;
            let rate = rates[toCurrency];

            return (e) => {
                this.setState({
                    [field]: e.target.value,
                    fromAmount: (e.target.value / rate)
                })
                
            }
        }

        let { rates, toCurrency } = this.state;
        let rate = rates[toCurrency];

        return (e) => {
            this.setState({
                [field]: e.target.value,
                toAmount: (e.target.value * rate)
            })

        }        
    };

    updateCurrency(field) {
        if (field === "toCurrency") {

            return (e) => {
                let { rates, toCurrency } = this.state;
                let rate = rates[e.target.value];
                this.setState({
                    [field]: e.target.value,
                    toAmount: this.state.fromAmount * rate
                });
                this.props.fetchHistoricalData(this.state.fromCurrency, e.target.value);
            }    
        }
        return (e) => {
            this.setState({
                [field]: e.target.value,
            })
        }
    };

    componentDidUpdate(prevProps) {
        if (prevProps.base !== this.state.fromCurrency) {
            this.props.fetchRates(this.state.fromCurrency)
                .then(() => {
                    let rate = this.props.rates[this.state.toCurrency]

                    this.setState({
                        fromCurrency: this.props.base,
                        rates: this.props.rates,
                        toAmount: (this.state.fromAmount * rate),
                    });
                    this.props.fetchHistoricalData(this.state.fromCurrency, this.state.toCurrency);
                }
            )
        };
    }

    render() {
        let { rates, fees, toCurrency, toAmount, fromCurrency, fromAmount } = this.state;
        let { openModal } = this.props;

        console.log(toCurrency);
        
        return(
            <div className="calculator">
                <div className="label">You send</div>
                <div className="from-div">
                    <label className="input-symbol">{this.symbols[fromCurrency]}</label>
                    <input 
                        className="from-amount" 
                        type="float" 
                        value={Math.floor(fromAmount * 100) / 100}
                        onChange={this.updateAmount("fromAmount")}
                    />
                    <select 
                        className="currency-dropdown" 
                        id="from-dropdown"
                        onChange={this.updateCurrency("fromCurrency")}
                    >
                        <option value="USD">🇺🇸 USD</option>
                        <option value="AUD">🇦🇺 AUD</option>
                        <option value="GBP">🇬🇧 GBP</option>
                        <option value="EUR">🇪🇺 EUR</option>
                        <option value="CAD">🇨🇦 CAD</option>
                        <option value="CNY">🇨🇳 CNY</option>
                        <option value="JPY">🇯🇵 JPY</option>
                    </select>
                </div>
                <div className="rates-div">
                    <ul>
                        <li><span>◉</span>calculation</li>
                        <li><span>◉</span>{this.symbols[fromCurrency]}{fees} {fromCurrency} Total Fees</li>
                        <li>
                            <span>◉</span>
                            <span id="rate-amount" onClick={openModal}>{rates[toCurrency]}</span> 
                            <span id="rate-symbol">✓</span> your exchange rate</li>
                    </ul>
                </div>
                <div className="label">Recipient gets</div>
                <div className="to-div">
                    <label className="input-symbol">{this.symbols[toCurrency]}</label>
                    <input 
                        className="to-amount" 
                        type="float" 
                        value={Math.floor(toAmount * 100) / 100 }
                        onChange={this.updateAmount("toAmount")}
                    />
                    <select 
                        className="currency-dropdown"
                        id="to-dropdown"
                        onChange={this.updateCurrency("toCurrency")}
                    >
                        <option value="USD">🇺🇸 USD</option>
                        <option value="AUD">🇦🇺 AUD</option>
                        <option value="GBP">🇬🇧 GBP</option>
                        <option value="EUR">🇪🇺 EUR</option>
                        <option value="CAD">🇨🇦 CAD</option>
                        <option value="CNY">🇨🇳 CNY</option>
                        <option value="JPY">🇯🇵 JPY</option>
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