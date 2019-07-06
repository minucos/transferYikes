import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import NavBarContainer from '../components/containers/navbar_container';
import SignUpContainer from '../components/containers/signup_form_container';
import LoginContainer from '../components/containers/login_form_container';

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/signup" component={SignUpContainer}/>
            <AuthRoute exact path="/login" component={LoginContainer}/>
            <Redirect to="/"/>
        </Switch>
    </div>
);

export default App;