import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';
import { login, logout, signup } from "./actions/session_actions";
import { fetchCurrencies, fetchCurrency } from "./actions/currency_actions";

// TESTING
window.login = login;
window.logout = logout;
window.signup = signup;
window.fetchCurrencies = fetchCurrencies;
window.fetchCurrency = fetchCurrency;
// END TESTING

document.addEventListener('DOMContentLoaded', () => {
    let preloadedState = {};

    if (window.currentUser) {
        preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser,
                },
            },
            session: {
                id: window.currentUser.id,
            }
        }
    }

    const store = configureStore(preloadedState);
    const root = document.getElementById('root');

    delete window.currentUser
    
    // TESTING
    window.store = store;
    window.dispatch = store.dispatch;
    // END TESTING

    ReactDOM.render(<Root store={store} />, root)
})