import React from "react";
import Navbar from "./nav_bar/nav_bar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { Route } from 'react-router-dom';

const App = () => (  
    <div className="rI LS">
        <div>{/* <div> style="margin-top: 0px;" */}
            <div className="rI LS">
                <div className="rI LS">
                    <Navbar />

                    <Route path="/login" component={LoginFormContainer} />
                    <Route path="/signup" component={SignupFormContainer} />
                </div>
            </div>
        </div>
    </div>
);

export default App;