import React from 'react';
import Search from '../userSearch/user_search';

class SendMoneyForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            sent_amount: 0,
            from_currency: 'USD',
            to_currency: 'USD'
        };

        this.symbols = {
            "USD": "$",
            "AUD": "$",
            "GBP": "£",
            "EUR": "€",
            "CAD": "$",
            "CNY": "¥",
            "JPY": "¥"
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidUpdate(prevProps,prevState) {
        let { to_currency, from_currency} = this.state;
        let { prev_to_currency, prev_from_currency} = prevState;
        if (prev_from_currency !== from_currency || prev_to_currency !== to_currency) {
            this.props.fetchRate(from_currency,to_currency);
        }
    }

    handleInput(type) {
        return (e) => {
            e.preventDefault();
            this.setState({ [type]: e.target.value });
        }
    }

    handleClick(type) {
        return (e) => {
            e.preventDefault();
            const userId = e.target.value;
            const name = this.props.users[userId].name;
            this.setState(
                { 
                    [type]: userId,
                    receiverName: name 
                },
                () => this.props.searchUsers(''));
        }
    }
    
    handleSearch(e) {
        this.props.searchUsers(e.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();
        let transaction = this.state;
        transaction['exchange_rate'] = this.props.rate;
        this.props.createTransaction(transaction)
            .then(() => this.props.history.push('/activity'));
    }
    
    render() {
        const { currentUserId, users, rate } = this.props;
        const { name, description, sent_amount, receiver_id, receiverName } = this.state;
         
        return(
            <div className='send-money-container'>
                <Search 
                    users={Object.values(users)} 
                    handleSearch={this.handleSearch}
                    handleClick={this.handleClick}
                    currentUserId={currentUserId}
                />
                <form className='send-money-form' onSubmit={(e) => this.handleSubmit(e)}>
                    <div className='input-box'>
                        <label>Name:</label>
                        <input type="text" value={name} onChange={this.handleInput('name')}/>
                    </div>
                    <div className='input-box'>
                        <label>Description:</label>
                        <input type="text" value={description} onChange={this.handleInput('description')}/>
                    </div>
                    <div className='input-box'>
                        <label>Send Amount:</label>
                        <input type="float" value={sent_amount} onChange={this.handleInput('sent_amount')}/>
                    </div>
                    <div className='input-box'>
                        <label>From:</label>
                        <select
                            className="currency-dropdown"
                            id="from-dropdown"
                            onChange={this.handleInput("from_currency")}
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
                    <div className='input-box'>
                        <label>To:</label>
                        <select
                            className="currency-dropdown"
                            id="to-dropdown"
                            onChange={this.handleInput("to_currency")}
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
                    <div className='input-box'>
                        <label>Exchange Rate:</label>
                        <label>{rate}</label>
                    </div>
                    <div className="input-box">
                        <label>Receiver:</label>
                        <label>{receiverName}</label>
                    </div>
                    <input className="submit-button" type="submit" value="Send Money!"/>
                </form>
            </div>
        )
    }
};

export default SendMoneyForm;

// name: '',
//     description: '',
//         sent_amount: 0,
//             from_currency: 'USD',
//                 to_currency: 'USD',
//                     exchange_rate: 1