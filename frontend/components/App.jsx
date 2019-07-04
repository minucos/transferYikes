import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import NavBarContainer from '../components/containers/navbar_container';
import SignUpContainer from '../components/containers/signup_form_container';
import LoginContainer from '../components/containers/login_form_container';

const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute path="/signup" component={SignUpContainer}/>
            <AuthRoute path="/login" component={LoginContainer}/>
        </Switch>
    </div>
);

export default App;