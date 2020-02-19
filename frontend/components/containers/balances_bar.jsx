import React from 'react';

class BalancesBar extends React.Component {
    
    constructor(props) {
        super(props)
        
        this.state = { selectedCurrency: this.props.selectedCurrency }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateCurrency = this.updateCurrency.bind(this);
    }
    
    updateCurrency(e) {
        this.setState({ selectedCurrency: e.target.value })
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const AMOUNTS = { USD: 1000, AUD: 1000, GBP: 500, EUR: 1000, CAD: 1000, JPY: 100000, CNY: 10000 };
        let currency = this.state.selectedCurrency;

        let amount = AMOUNTS[currency];

        let transaction = {
            name: 'Funds Deposit',
            sent_amount: amount,
            from_currency: currency,
            to_currency: currency,
            exchange_rate: 1,
        }

        this.props.depositTransaction(transaction)
            .then()
    };
    
    walletBar() {
        return (
            <div className="balance-bar-container">
                <div className="add-cash">
                    <form className="add-cash-form" onSubmit={this.handleSubmit}>
                        <select 
                            className="add-cash-dropdown" 
                            value={this.state.selectedCurrency} 
                            onChange={this.updateCurrency}
                        >
                            <option value="USD">USD $1000</option>
                            <option value="AUD">AUD $1000</option>
                            <option value="EUR">EUR €1000</option>
                            <option value="CNY">CNY ¥10000</option>
                            <option value="GBP">GBP £1000</option>
                            <option value="CAD">CAD $1000</option>
                            <option value="JPY">JPY ¥100000</option>
                        </select>
                        <input type="submit" value="Add money" />
                    </form>
                    <div className="add-cash-quote">(If only it were this easy in real life, right?)</div>
                </div>
            </div>
        )
    }

    render() {
        return (
            this.walletBar()
        )
    }
}

export default BalancesBar;