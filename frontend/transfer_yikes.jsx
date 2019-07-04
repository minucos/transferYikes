import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';
import { login, logout, signup } from "./actions/session_actions";

// TESTING
window.login = login;
window.logout = logout;
window.signup = signup;
// END TESTING

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');
    
    // TESTING
    window.store = store;
    window.dispatch = store.dispatch;
    // END TESTING

    ReactDOM.render(<Root store={store} />, root)
})