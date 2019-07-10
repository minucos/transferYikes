import React from 'react';
import { Link } from 'react-router-dom';

class FeatureIndex extends React.Component {

    render() {
        let { showActivity, showWallet, showRecipients } = this.props;

        return (
            <ul className="nav-menu">
                <li className="nav-item">
                    <Link to="/">
                        <div className="dash-logo">
                            <div className="logo">⚐</div>
                            <div className="logo-text">TransferYikes</div>
                        </div>
                    </Link>
                </li>
                <li className="nav-item" onClick={showActivity}>
                    Activity
                </li>
                <li className="nav-item" onClick={showWallet}>
                    Currencies
                </li>
                <li className="nav-item" onClick={showRecipients}>
                    Recipients
                </li>
            </ul>
        )
    };
};

export default FeatureIndex;