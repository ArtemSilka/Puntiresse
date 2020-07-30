import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const showMenu = () => {
        document.getElementById("drop").classList.toggle("show-menu")
    }

    const display = currentUser ? (
        <div className="po rI LS sLG">
            <div className="rI LS">
                <div className="rU jz sev">
                    <div className="Cq rU Zz No uU po">

                        {/* left */}
                        <div className="rU No po she">
                        {/* logo */}
                        <div className="XG nin">
                            <div className="">
                                <div className="d eig">
                                    <div className="Sl jz m8 nin hA-">
                                        <Link to="/">
                                            <img className="un it eD tre" src={window.logoURL} height="24px" width="24px" alt="Logo" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Home */}
                        <div className="BF Eh fv rI LS pya">
                            <div className="EY rI fv Xa po na">
                                <div className="Eh rU No m8 rI LS che">
                                    <div className="ES oF Je tR t7 mW">
                                        Home
                                        <div className="IL rI LS"></div>
                                            <img src="" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Today */}
                        <div className="Eh fv rI LS pya a_A">
                            <div className="EY rI fv Xa po na">
                                <div className="Eh rU No m8 rI LS che">
                                    <div className="ES oF Je t7 mW ">
                                        Today
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Following */}
                        <div className="Eh fv rI LS pya a_A">
                            <div className="EY rI fv Xa po na">
                                <div className="Eh rU No m8 rI LS che">
                                    <div className="ES oF Je t7 mW ">
                                        Following
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Search */}
                        <div className="uU wYR zI7 rI LS thi">
                            <div className="rU fv zz zI7 rI LS ten a_A">
                                <div className="rU XG No uU zI7 rI LS ele">
                                    <div className="Eh Gd zI7 rI LS">
                                        <img className="un B9u U9O eD" src={window.glassURL}
                                            height="16" width="16">
                                        </img>
                                    </div>
                                    <div className="uU zI7 rI LS Xa">
                                        <input className="twe" type="text" placeholder="Search for Baby cats"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* right */}
                        <div className="rU No zI7 rI LS">
                            {/* Profile */}
                            <div class="zI7 rI LS">
                                <div class="d zI7 rI LS fou">
                                    <a class="rI fif">
                                        <div class="d rU No m8 zI7 rI LS six a_A">
                                            <div class="d rU No m8 zI7 rI LS tw1">
                                                <div class="d XG qJc zI7 rI LS tw2">
                                                    <div class="Pj7 sLG XG d m1e">
                                                        <div class="XG zI7 rI LS tw3">
                                                            <img class="hCL eD po MIw" src={window.profileURL}/>
                                                        </div>
                                                        <div class="KPc MIw ojN Rym p6V QLY"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* dropdown */}
                            <div class="zI7 rI LS tw7">
                                <button class="rYa eD ad yQo EY qrs na" type="button">
                                    <div class="x8f d _O1 No m8 OGJ YbY tw5 a_A" onClick={showMenu}>
                                        <img class="un B9u U9O eD" src={window.dropdownURL} height="20" width="20"/>
                                    </div>
                                    <div id="drop" className="menu-back" onClick={showMenu}>
                                        <ul className="drop-down-menu oF mW" onClick={e => e.stopPropagation()}>
                                            <li onClick={logout}>Log out</li>
                                        </ul>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        <div> 
            {display}
        </div>
    );
};