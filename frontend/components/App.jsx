import React from 'react';
import {Route, Switch, Link } from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import SigninFormContainer from './session_form/login_form_container';
import Nav from './Nav/nav';

const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                <h1>Coinplace</h1>
            </Link>
            <Nav />
        </header>
        
        <Route exact path="/signin" component={SigninFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />

    </div>
);

export default App;