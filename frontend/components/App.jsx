import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import HomePage from '../components/containers/homepage';
import SignUpContainer from '../components/containers/signup_form_container';
import LoginContainer from '../components/containers/login_form_container';
import DashboardContainer from '../components/containers/dashboard_container';
import ModalContainer from '../components/containers/modal_container';
import { receiveUIDisplay } from '../actions/ui_actions';

window.receiveUIDisplay = receiveUIDisplay;

const App = () => (
    <div>
        <ModalContainer />
        <Switch>
            <AuthRoute path="/signup" component={SignUpContainer}/>
            <AuthRoute path="/login" component={LoginContainer}/>
            <AuthRoute path="/home" component={HomePage} />
            <ProtectedRoute path='/' component={DashboardContainer}  />
            <Redirect to="/"/>
        </Switch>
    </div>
);

export default App;