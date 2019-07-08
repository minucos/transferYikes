import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import NavBarContainer from '../components/containers/navbar_container';
import SignUpContainer from '../components/containers/signup_form_container';
import LoginContainer from '../components/containers/login_form_container';
import DashboardContainer from '../components/containers/dashboard_container';

const App = () => (
    <div>
        <Switch>
            <ProtectedRoute path='/user/wallet' component={DashboardContainer} />
            <AuthRoute path="/signup" component={SignUpContainer}/>
            <AuthRoute path="/login" component={LoginContainer}/>
            <AuthRoute path="/" component={NavBarContainer} />
            <Redirect to="/"/>
        </Switch>
    </div>
);

export default App;