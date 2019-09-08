import React from 'react';
import { Link } from 'react-router-dom';
import WalletBar from './wallet_bar';
import CurrenciesIndex from './currencies_index';


class Wallet extends React.Component {

    constructor(props) {
        super(props)

        this.state = { selectedCurrency: this.props.defaultCurrency }
    }

    render() {
        let { depositTransaction, balances } = this.props;
        
        // ['USD', 'AUD', 'GBP', 'EUR', 'CAD', 'CNY', 'JPY', 'XBT']
        return (
            <div className="wallet-container">
                <WalletBar 
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

export default Wallet;