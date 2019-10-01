import React from 'react';
import Search from '../userSearch/user_search';

class SendMoneyForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.form;
        this.handleSearch = this.handleSearch.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
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

        this.props.createTransaction(this.state)
            .then(() => this.props.history.push('/activity'));
    }
    
    render() {
        const { currentUserId, users } = this.props;
        const { name, description, from_currency, to_currency, sent_amount, exchange_rate, receiver_id, receiverName } = this.state;
         
        return(
            <div className='send-money-container'>
                <Search 
                    users={Object.values(users)} 
                    handleSearch={this.handleSearch}
                    handleClick={this.handleClick}
                    currentUserId={currentUserId}
                />
                <form className='send-money-form' onSubmit={(e) => this.handleSubmit(e)}>
                    <label>Name:
                        <input type="text" value={name} onChange={this.handleInput('name')}/>
                    </label>
                    <label>Description:
                        <input type="text" value={description} onChange={this.handleInput('description')}/>
                    </label>
                    <label>Send Amount:
                        <input type="float" value={sent_amount} onChange={this.handleInput('sent_amount')}/>
                    </label>
                    <label>From:
                        <input type="text" value={from_currency} onChange={this.handleInput('from_currency')}/>
                    </label>
                    <label>To:
                        <input type="text" value={to_currency} onChange={this.handleInput('to_currency')}/>
                    </label>
                    <label>Exchange Rate:
                        <input type="text" value={exchange_rate} onChange={this.handleInput('exchange_rate')}/>
                    </label>
                    <div>Receiver: {receiverName}</div>
                    <input type="submit" value="Send Money!"/>
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