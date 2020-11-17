import React from 'react';
import Search from '../userSearch/user_search';

class SendMoneyForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            sentAmount: 0,
            fromCurrency: this.props.currency,
            toCurrency: this.props.currency
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

        this.flags = {
            "USD": '🇺🇸 USD',
            "AUD": "🇦🇺 AUD",
            "GBP": "🇬🇧 GBP",
            "EUR": "🇪🇺 EUR",
            "CAD": "🇨🇦 CAD",
            "CNY": "🇨🇳 CNY",
            "JPY": "🇯🇵 JPY"
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        let { currency, receiver, users } = this.props;

        if (receiver) {
            this.setState({
                ['receiverId']: receiver,
                receiverName: users[receiver].name
            })
        }
    }

    componentDidUpdate(prevProps,prevState) {
        let { toCurrency, fromCurrency} = this.state;
        let { toCurrency: prevToCurrency, fromCurrency: prevFromCurrency} = prevState;
        if (prevFromCurrency !== fromCurrency || prevToCurrency !== toCurrency) {
            this.props.fetchRate(fromCurrency,toCurrency);
        }
    }

    componentWillUnmount() {
        this.props.clearSelections();
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
    
    handleSearch(searchTerm) {
        this.props.searchUsers(searchTerm);
    }

    buildDropdown(type) {
        let { symbols, flags } = this;
        
        return Object.keys(symbols).map( currency => (
            <option
                key={currency}
                value={currency}
            >
                {flags[currency]}
            </option>
        ))
    }

    handleSubmit(e) {
        e.preventDefault();
        let transaction = this.state;
        transaction['exchangeRate'] = this.props.rate;
        this.props.createTransaction(transaction)
            .then(() => this.props.history.push('/activity'));
    }
    
    render() {
        const { currentUserId, users, rate, errors } = this.props;
        const { name, 
            description, 
            sentAmount, 
            receiverId, 
            receiverName, 
            toCurrency, 
            fromCurrency 
        } = this.state;
         
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
                        <input 
                            className={ errors['name'] ? 'error' : null} 
                            type="text" 
                            value={name} 
                            onChange={this.handleInput('name')}
                        />
                    </div>
                    <div className='input-box'>
                        <label>Description:</label>
                        <input
                            type="text" 
                            value={description} 
                            onChange={this.handleInput('description')}
                        />
                    </div>
                    <div className='input-box'>
                        <label>Send Amount:</label>
                        <input 
                            className={ errors['amount'] ? 'error' : null} 
                            type="float" 
                            value={sentAmount} 
                            onChange={this.handleInput('sentAmount')}
                        />
                    </div>
                    <div className='input-box'>
                        <label>From:</label>
                        <select
                            className="currency-dropdown"
                            id="from-dropdown"
                            onChange={this.handleInput("fromCurrency")}
                            defaultValue={fromCurrency}
                        >
                            {this.buildDropdown('fromCurrency')}
                        </select>
                    </div>
                    <div className='input-box'>
                        <label>To:</label>
                        <select
                            className="currency-dropdown"
                            id="to-dropdown"
                            onChange={this.handleInput("toCurrency")}
                            defaultValue={toCurrency}
                        >
                            {this.buildDropdown('toCurrency')}
                        </select>
                    </div>
                    <div className='input-box'>
                        <label>Exchange Rate:</label>
                        <label>{rate}</label>
                    </div>
                    <div className="input-box">
                        <label 
                            className={errors['receiverId'] ? 'error' : null}
                        >Receiver:
                        </label>
                        <label>{receiverName}</label>
                    </div>
                    <input className="submit-button" type="submit" value="Send Money!"/>
                </form>
            </div>
        )
    }
};

export default SendMoneyForm;