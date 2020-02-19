import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        e.preventDefault();

        this.setState({ 
            searchTerm: e.target.value
        })
    }

    componentDidUpdate(prevProps,prevState) {
        let { searchTerm} = this.state;
        if (prevState.searchTerm !== searchTerm) {
            this.props.handleSearch(searchTerm)
        }
    }

    matchSearch(user) {
        let { searchTerm } = this.state;
        return (
            searchTerm.length > 0 &&
            (
                user.name.includes(searchTerm) || 
                user.email.includes(searchTerm)
            )
        );
    }

    render() {
        let { currentUserId, handleClick, users } = this.props;

        const usersList = users.map((user, i) => {
            if (user.id !== currentUserId && this.matchSearch(user)) {
                return (
                    <li
                        key={`user=${i}`}
                        onClick={handleClick('receiver_id')}
                        value={user.id}
                    >
                        {user.name} <span>| {user.email}</span>
                    </li>
                )
            }
        })
    
        return(
            <div className='user-search'>
                <h1>User Search</h1>
                <div>
                    <input type="text" placeholder="Search by name or email" onChange={this.handleInput} />
                    <ul className="user-list">
                        {usersList}
                    </ul>
                </div>
                <div>
                </div>
            </div>
        )
    }
};

export default Search;