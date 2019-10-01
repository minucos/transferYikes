import React from 'react';
import { Link } from 'react-router-dom';
import BalancesBar from './balances_bar';
import CurrenciesIndex from './currencies_index';


class Balance extends React.Component {

    constructor(props) {
        super(props)

        this.state = { selectedCurrency: this.props.defaultCurrency }
    }

    componentDidMount() {
        this.props.fetchAllTransactions();
    }

    componentWillUnmount() {
        this.props.clearTransactions(this.props.userId);
    }

    render() {
        let { depositTransaction, balances } = this.props;
        
        // ['USD', 'AUD', 'GBP', 'EUR', 'CAD', 'CNY', 'JPY', 'XBT']
        return (
            <div className="wallet-container">
                <BalancesBar 
                    userId={this.props.userId}
                    selectedCurrency={this.state.selectedCurrency} 
                    depositTransaction={depositTransaction}
                />
                <CurrenciesIndex 
                    balances={balances}
                />
            </div>
        )
    }
};

export default Balance;