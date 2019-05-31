import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({currentUser, logout}) => {
    const loggedIn = () => {
        debugger;
        return (
            <div className="loggedIn">
                <h2>{currentUser.firstname + currentUser.lastname}</h2>
                <button onClick={logout}>Sign Out</button>
            </div>
        )
    };
    
    const loggedOut = () => {
       return (
            <div className="loggedOut">
               <div><Link className="signInLink" to="/signin">Sign in</Link></div>
               <div ><Link className="signUpLink"to="/signup">Get started</Link></div>
            </div>
       )
    };

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