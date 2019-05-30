import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({currentUser, logout}) => {
    const loggedIn = () => {
        debugger;
        return (
            <div>
                <h2>{currentUser.firstname + currentUser.lastname}</h2>
                <button onClick={logout}>Sign Out</button>
            </div>
        )
    };
    
    const loggedOut = () => {
       return (
            <div>
                <Link to="/signin">Sign in</Link>
                &nbsp;or&nbsp;
                <Link to="/signup">Get started</Link>
            </div>
       )
    };


    return currentUser ? loggedIn() : loggedOut();
};

export default Nav;