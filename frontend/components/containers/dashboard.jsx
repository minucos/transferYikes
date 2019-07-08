import React from 'react';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
        let { user, wallet, logout } = this.props; 

        if (!user || !wallet) return null;

        return (
            <div>
                <h1>{user.fname}</h1>
                <button onClick={logout}>LOG OUT</button>
            </div>
        )
    }
};

export default Dashboard;