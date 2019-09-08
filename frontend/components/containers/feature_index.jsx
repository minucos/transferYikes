import React from 'react';
import { Link } from 'react-router-dom';

class FeatureIndex extends React.Component {

    render() {
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
                <li className="nav-item">
                    <Link to='/activity'>Activity</Link>
                </li>
                <li className="nav-item">
                    <Link to='/balances'>Balances</Link>
                </li>
                <li className="nav-item">
                    <Link to='/recipients'>Recipients</Link>
                </li>
            </ul>
        )
    };
};

export default FeatureIndex;