import React from 'react';
import Search from '../userSearch/user_search';

class SendMoneyForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.form;
        this.handleSearch = this.handleSearch.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(type) {
        return (e) => {
            e.preventDefault();
            this.setState({ [type]: e.target.value });
        }
    }
    
    handleSearch(e) {
        this.props.searchUsers(e.target.value);
    }
    
    render() {
        const { currentUserId, users } = this.props;
        
        let selectedUser = 'none';
        if (this.state.receiver && users) {
            selectedUser = users[this.state.receiver].name;
        }

        return(
            <div className='send-money-container'>
                <Search 
                    users={Object.values(users)} 
                    handleSearch={this.handleSearch}
                    handleInput={this.handleInput}
                    currentUserId={currentUserId}
                />
                <h1>SELECTED USER</h1>
                {selectedUser}
            </div>
        )
    }
};

export default SendMoneyForm;