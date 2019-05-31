import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({currentUser, logout}) => {
    const loggedIn = () => {
        debugger;
        return (
            <nav>
                <h2>{currentUser.firstname + currentUser.lastname}</h2>
                <button onClick={logout}>Sign Out</button>
            </nav>
        )
    };
    
    const loggedOut = () => {
       return (
            <nav>
                <Link to="/signin">Sign in</Link>
                &nbsp;or&nbsp;
                <Link to="/signup">Get started</Link>
            </nav>
       )
    };

    return (
        currentUser ? loggedIn() : loggedOut()
    )
};

export default Nav;