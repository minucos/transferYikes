import React from 'react';
import { Link } from 'react-router-dom';
import FeatureIndexContainer from './feature_index_container';
import WalletContainer from './wallet_container';
import ActivitiesIndexContainer from './activities_index_container';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
        let { user, wallet, logout, heading } = this.props; 

        if (!user) return null;

        let component;
        switch (heading) {
            case 'Activity':
                component = <ActivitiesIndexContainer />;
                break
            case 'Wallet':
                component = <WalletContainer />;
                break
            default:
                component = <WalletContainer />;
        }

        return (
            <div className="dashboard">
                <FeatureIndexContainer />
                <div className="detail-container">
                    <div className="navbar">
                        <div className="heading">{heading}</div>
                        <a className="button" onClick={logout}>Log out</a>
                    </div>
                    {component}
                </div>
            </div>
        )
    }
};

export default Dashboard;