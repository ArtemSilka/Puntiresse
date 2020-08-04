import React from "react";
import Navbar from "./nav_bar/nav_bar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import PinCreateFormContainer from './pin/pin_create_form_container';
import PinIndexContainer from './pin/pin_index_container';
import PinShowContainer from './pin/pin_show_container';
import PinEditFormContainer from './pin/pin_edit_form_container';
import Modal from './modal/modal';


const App = () => (  
    <div>
        <header>
            <Navbar />
            
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </header>
            <Switch>
                <ProtectedRoute exact path='/create-pin' component={PinCreateFormContainer} />
                <ProtectedRoute exact path='/home' component={PinIndexContainer} />
                <ProtectedRoute exact path='/pins/:pinId' component={PinShowContainer} />
                <ProtectedRoute exact path="/pins/:pinId/edit" component={PinEditFormContainer} />
            </Switch>  
            <Modal />
    </div>
);

export default App;