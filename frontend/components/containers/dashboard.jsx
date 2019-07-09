import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
        let { user, wallet, logout } = this.props; 

        if (!user || !wallet) return null;

        return (
            <div className="dashboard">
                <div className="nav-menu">
                    <Link to="/">
                        <div className="dash-logo">
                            <div className="logo">⚐</div>
                            <div className="logo-text">TransferYikes</div>
                        </div>
                    </Link>
                    <ul>
                        <li>Activity</li>
                        <li>Wallets</li>
                        <li>Recipients</li>
                    </ul>
                </div>
                <div className="navbar">
                    <div className="heading">Activity</div>
                    <a className="button" onClick={logout}>Log out</a>
                </div>
            </div>
        )
    }
};

export default Dashboard;