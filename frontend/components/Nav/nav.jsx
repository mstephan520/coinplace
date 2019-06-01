import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({currentUser, logout}) => {
    const loggedIn = () => {
        // debugger;
        return (
            <div className="loggedIn">
                <h2>{currentUser.email}</h2>
                <button onClick={logout}>Sign Out</button>
                <Link className="signUpLink" to="/signup">Get started</Link>
            </div>
        )
    };
    
    const loggedOut = () => {
        // debugger
       return (
            <div className="loggedOut">
               <Link className="signInLink" to="/signin">Sign in</Link>
               <Link className="signUpLink"to="/signup">Get started</Link>
            </div>
       )
    };
    // debugger
    return (
        <nav className="navBarContainer">
            <div className="coinplaceLogoContainer">
                <h2 className="coinplaceLogo">coinplace</h2>
            </div>

            <div className="authNavLinksContainer">

            </div>

            <div className="authContainer">
                {currentUser ? loggedIn() : loggedOut()}
            </div>
        </nav>
    )
};

export default Nav;