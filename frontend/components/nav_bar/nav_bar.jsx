import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div className="po rI LS">
            <div className="rI LS">
                <div className="rU jz sev">
                    <div className="Cq rU Zz No uU po">
                        <div className="rU No po she">
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
                            <div className="Eh fv rI LS pya a_A">
                                <div className="EY rI fv Xa po na">
                                    <div className="Eh rU No m8 rI LS che">
                                        <div className="ES oF Je t7 mW ">
                                            Today
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Eh fv rI LS pya a_A">
                                <div className="EY rI fv Xa po na">
                                    <div className="Eh rU No m8 rI LS che">
                                        <div className="ES oF Je t7 mW ">
                                            Following
                                        </div>
                                    </div>
                                </div>
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
        <div className="rI LS"> 
            {display}
        </div>
    );
};