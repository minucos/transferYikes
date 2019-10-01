import React from 'react';

class SendMoneyForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.form;
        this.handleSearch = this.handleSearch.bind(this);
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
        const { currentUserId } = this.props;

        const users = Object.values(this.props.users).map((user, i) => {
            if (user.id !== currentUserId) {
                return(
                    <li key={`user=${i}`}>{user.name}</li>
                )
            }
        })

        return(
            <div className='send-money-container'>
                <h2>Search</h2>
                <div>
                    <input type="text" onChange={this.handleSearch} />
                </div>
                <h2>Found Users</h2>
                <ul>
                    {users}
                </ul>
            </div>
        )
    }
};

export default SendMoneyForm;