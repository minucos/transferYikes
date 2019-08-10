import React from 'react';
import { Link } from 'react-router-dom';

const CurrenciesIndex = (props) => {

    if (!props.currencies) {
        return null;
    }

    let currencies = props.currencies.map( currency => {
        return (
            <tr key={currency.id} className="currencies-table-row">
                <td>{currency.currency_type}</td>
                <td>$ {Number.parseFloat(currency.balance).toFixed(2)}</td>
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
                    {currencies}
                </tbody>
            </table>
        </div>
    )
}

export default CurrenciesIndex;