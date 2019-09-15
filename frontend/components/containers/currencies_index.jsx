import React from 'react';
import { Link } from 'react-router-dom';

const CurrenciesIndex = (props) => {

    if (!props.balances) {
        return null;
    }

    let balances = Object.keys(props.balances).map( currency => {
        const symbols = {
            "USD": "$",
            "AUD": "$",
            "GBP": "£",
            "EUR": "€",
            "CAD": "$",
            "CNY": "¥",
            "JPY": "¥",
            "XBT": "₿"
        }

        const balance = props.balances[currency].toFixed(2);
        const symbol = symbols[currency];

        if (balance == 0) return null;

        return (
            <tr key={currency} className="currencies-table-row">
                <td>{currency} ( {symbol} )</td>
                <td className='balances'>{balance}</td>
                <td>
                    <button>Send</button>
                    <button>Convert</button>
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