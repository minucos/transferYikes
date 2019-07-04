import React from 'react';
import { Link } from 'react-router-dom';
// import { AuthRoute } from '../../utils/route_util';

class NavBar extends React.Component {
    render() {
        let { currentUser, logout } = this.props;

        let loggedOut = () => (
            <div className="rightbar">
                <Link to="/signup">Sign up</Link> <Link to="/login">Log in</Link>
            </div>
        )

        let loggedIn = () => (
            <div className="rightBar">
                Welcome, {currentUser.fname}!
                <button onClick={logout}>Log out</button>
            </div>
        )

        return (
            <div className="navbar">
                <div className="leftbar">
                    TransferYikes
                </div>
                { currentUser ? loggedIn() : loggedOut() }
            </div>
        )
    }
}

export default NavBar;