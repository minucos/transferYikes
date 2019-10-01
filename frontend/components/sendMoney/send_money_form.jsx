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
                    name: name 
                },
                () => this.props.searchUsers(''));
        }
    }
    
    handleSearch(e) {
        this.props.searchUsers(e.target.value);
    }
    
    render() {
        const { currentUserId, users } = this.props;
        const { receiver } = this.state;
         
        return(
            <div className='send-money-container'>
                <Search 
                    users={Object.values(users)} 
                    handleSearch={this.handleSearch}
                    handleClick={this.handleClick}
                    currentUserId={currentUserId}
                    receiver={receiver}
                />
                <h1>SELECTED USER</h1>
                {this.state.name}
            </div>
        )
    }
};

export default SendMoneyForm;