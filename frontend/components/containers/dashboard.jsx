import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import FeatureIndexContainer from './feature_index_container';
import BalanceContainer from './balance_container';
import ActivitiesIndexContainer from './activities_index_container';
import RecipientsContainer from './recipients_container';

class Dashboard extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
        let { user, logout, location: { pathname } } = this.props; 

        if (!user) return null;
        
        pathname = pathname.split('/').reverse()[0];
        let heading = pathname.charAt(0).toUpperCase() + pathname.slice(1)
        
        return (
            <div className="dashboard">
                <FeatureIndexContainer />
                <div className="detail-container">
                    <div className="navbar">
                        <div className="heading">{heading}</div>
                        <div className="dropdown-button">
                            <div>{`${user.fname} ${user.lname} `}
                                <FontAwesomeIcon
                                    className='logout-icon'
                                    icon={faChevronDown}
                                />
                            </div>
                            <div className='dropdown-content'>
                                <div onClick={logout} className='logout-button'>
                                    <FontAwesomeIcon 
                                        className='logout-icon'
                                        icon={faSignOutAlt}
                                    />
                                    Log out
                                </div>
                            </div>
                        </div>
                    </div>
                    <Switch>
                        <Route path='/activity' component={ActivitiesIndexContainer} />
                        <Route path='/balances' component={BalanceContainer} />
                        <Route path='/recipients' component={RecipientsContainer} />
                        <Redirect to='/activity' />
                    </Switch>
                </div>
            </div>
        )
    }
};

export default Dashboard;