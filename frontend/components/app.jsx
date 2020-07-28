import React from "react";
import Navbar from "./nav_bar/nav_bar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { Route } from 'react-router-dom';

const App = () => (
    <div>
        <Navbar />

        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;