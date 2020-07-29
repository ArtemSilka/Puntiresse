import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div className="nav-bar-container">

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
        </div>
    ) : (
            <div className="rU ss Ia No rI LS raz">
                <div className="rU Ia k No rI LS">
                    <div className="un it eD">
                <Link to="/">
                        <img className="tre" src={window.logoURL} height="32px" width="32px" alt="Logo" />
                </Link>
                    </div>
                    <div className="St rI LS">
                        <h3 className="aT ES oF Am it eR dva">Puntiresse</h3> 
                    </div>
            </div>
            <div className="rU iC rI LS">
                <div className="rU Ia An No rI LS">
                    <div className="rG BE rI LS">
                        <a className="Tt gU EY rI eD RS jE">
                            <div className="ES oF Je Bj eR zT mW na">About</div>
                        </a>
                    </div>
                    <div className="rG BE rI LS">
                        <a className="Tt gU EY rI eD RS jE">
                            <div className="ES oF Je Bj eR zT mW na">Business</div>
                        </a>
                    </div>
                    <div className="rG BE rI LS">
                        <a className="Tt gU EY rI eD RS jE">
                            <div className="ES oF Je Bj eR zT mW na">Blog</div>
                        </a>
                    </div>
                </div>

                <div className="Gd kN em IL rI LS">
                    <button className="Ia LS US ad EY Zc Z3 hA- si lg na po eD rI" >
                        <Link to="/login">
                            <div className="ES oF Je tR t7 mW">Log in</div>
                        </Link>
                    </button>
                </div>
                <div className="Gd kN em IL rI LS">
                    <button className="Ia LS US ad EY Zc Z3 hA- a_A zz na po eD rI" >
                        <div className="ES oF Je tR t7 mW">
                            <Link to="/signup">Sign up</Link>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="rI LS"> 
            {display}
        </div>
    );
};