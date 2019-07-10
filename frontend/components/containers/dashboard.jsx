import React from 'react';
import { Link } from 'react-router-dom';
import FeatureIndexContainer from './feature_index_container';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
        let { user, wallet, logout, heading } = this.props; 

        if (!user || !wallet) return null;

        return (
            <div className="dashboard">
                <FeatureIndexContainer />
                <div className="navbar">
                    <div className="heading">{heading}</div>
                    <a className="button" onClick={logout}>Log out</a>
                </div>
            </div>
        )
    }
};

export default Dashboard;