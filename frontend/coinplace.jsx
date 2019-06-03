import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

// const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    // debugger
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        // debugger
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // debugger
    ReactDOM.render(<Root store={store} />, root);
});