import React from 'react';
import { Link } from 'react-router-dom';

class Recipients extends React.Component {
    componentDidMount() {
        this.props.fetchAllTransactions();
    }

    render() {
        let { selectUser, transactions } = this.props;

        let recipients = this.props.recipients.map( recipient => {
            let transaction = transactions[recipient.id];
            return(
                <li key={recipient.id}>
                    <div className="name">
                        {recipient.name}
                    </div>
                    <div className="transaction">
                        {transaction ? transaction.name : "No recent transaction"}
                    </div>
                    <Link to='/activity/send'>
                        <button onClick={() => selectUser(recipient.id)}>
                            Send
                        </button>
                    </Link>
                </li>
            )
        })
        return(
            <div className="recipients">
                <ul >
                    <li>
                        <div className="name">
                            Recipient
                        </div>
                        <div className="transaction">
                            Last Transaction
                    </div>
                    </li>
                    {recipients}
                </ul>
            </div>
        )
    }
};

export default Recipients;