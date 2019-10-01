import React from 'react';
import { Link } from 'react-router-dom';
// import { AuthRoute } from '../../utils/route_util';

class NavBar extends React.Component {
    componentDidMount() {
        this.props.fetchCurrentUser(this.props.currentUser.id)
    }

    render() {
        let { currentUser, logout } = this.props;

        let loggedOut = () => (
            <div className="rightbar">
                <Link className="navbar-signup" to="/signup">Register</Link> <Link className="button" to="/login">Log in</Link>
            </div>
        )

        let loggedIn = () => (
            <div className="rightbar">
                <div className="welcome">Welcome, {currentUser.name}!</div>
                <a className="button" onClick={logout}>Log out</a>
            </div>
        )

        return (
            <div className="navbar">
                <Link to="/">
                    <div className="leftbar">
                        <div className="logo">⚐</div>
                        <div className="logo-text">TransferYikes</div>
                    </div>
                </Link>
                { currentUser ? loggedIn() : loggedOut() }
            </div>
        )
    }
}

export default NavBar;