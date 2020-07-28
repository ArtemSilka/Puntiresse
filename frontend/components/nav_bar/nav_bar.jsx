import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <header className="nav-bar-container">

            <Link to="/">
                <div className="nav-bar-logo-container">
                    <img src={window.logoURL} height="32px" width="32px" alt="Logo" />
                </div>
            </Link>

            <Link to="/"><div className="nav-bar-link">Home</div></Link>
            <div className="nav-bar-link">Following</div>

            <div className="search-bar">
                <i className=""></i>
                <input className="search-input" type="text" placeholder="Search" />
            </div>

            <div className="notifications-container"><i className=""></i></div>
            <div className="inbox-container"><i className=""></i></div>

            <button className="nav-bar-logout-button" onClick={logout}>Log out</button>
        </header>
    ) : (
        <header className="nav-bar-container">

            <Link to="/">
                <div className="nav-bar-logo-container">
                    <img src={window.logoURL} height="32px" width="32px" alt="Logo" />
                </div>
                <div>Puntiresse</div>
            </Link>

            <div>
                <Link to="/"><div className="nav-bar-link">About</div></Link>
                <Link to="/"><div className="nav-bar-link">Business</div></Link>
                <Link to="/"><div className="nav-bar-link">Blog</div></Link>
            </div>

            <div>
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign Up</Link>
            </div>

        </header>
    );

    return (
        <div>
            {display}
        </div>
    );
};