import React from 'react';
import { Link } from 'react-router-dom';

const symbols = {
    "USD": "$",
    "AUD": "$",
    "GBP": "£",
    "EUR": "€",
    "CAD": "$",
    "CNY": "¥",
    "JPY": "¥",
    "XBT": "₿"
};

const CurrenciesIndex = (props) => {

    if (!props.balances) {
        return null;
    }

    let balances = Object.keys(props.balances).map( currency => {
        const balance = props.balances[currency].toFixed(2);
        const symbol = symbols[currency];

        if (balance == 0) return null;

        return (
            <tr key={currency} className="currencies-table-row">
                <td className="balance-flag">
                    <img 
                        className="flag" 
                        src={window[currency]} 
                        alt="flag"
                    />
                </td>
                <td className="balance-currency">
                    {currency} ( {symbol} )
                </td>
                <td className='balance-amount'>
                    {balance}
                </td>
                <td className="balance-send">
                    <Link to='/activity/send'>
                        <button onClick={() => props.selectCurrency(currency)}>
                            Send
                        </button>
                    </Link>
                </td>
            </tr>
        )
    }

    )
    return(
        <div className="currencies-index">
            <table className="currencies-table">
                <thead className="currencies-table-heading">
                    <tr className="heading-row">
                        <th></th>
                        <th className="heading-currency">Currency</th>
                        <th className="heading-balance">Balance</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody className="currencies-table-body">
                    {balances}
                </tbody>
            </table>
        </div>
    )
}

export default CurrenciesIndex;