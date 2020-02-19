import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';

// TESTING
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
    // END TESTING

    ReactDOM.render(<Root store={store} />, root)
})