import React from 'react';

const Search = (props) => {

    const usersList = props.users.map((user, i) => {
        if (user.id !== props.currentUserId) {
            return (
                <li
                    key={`user=${i}`}
                    onClick={props.handleClick('receiver_id')}
                    value={user.id}
                >
                    {user.name}
                </li>
            )
        }
    })

    return(
        <div className='user-search'>
            <h1>User Search</h1>
            <div>
                <input type="text" placeholder="Search by name or email" onChange={props.handleSearch} />
                <ul className="user-list">
                    {usersList}
                </ul>
            </div>
            <div>
            </div>
        </div>
    )
};

export default Search;