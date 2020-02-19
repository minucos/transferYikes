import React from 'react';
import { Link } from 'react-router-dom';

class Recipients extends React.Component {
    componentDidMount() {
        this.props.fetchAllTransactions();
    }

    render() {
        let { selectUser } = this.props;

        let recipients = this.props.recipients.map( recipient => {
            return(
                <li key={recipient.id}>
                    <div className="name">
                        {recipient.name}
                    </div>
                    <div className="transaction">
                        Most recent transaction goes here
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