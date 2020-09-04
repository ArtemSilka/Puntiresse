import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

import Navbar from "./nav_bar/nav_bar_container";
import Landing from "../components/landing/landing_container";

import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

import ProfileContainer from './profile/profile_container';
import EditProfileContainer from './profile/edit_profile_container';

import PinCreateFormContainer from './pin/pin_create_form_container';
import PinIndexContainer from './pin/pin_index_container';
import PinShowContainer from './pin/pin_show_container';
import PinEditFormContainer from './pin/pin_edit_form_container';


import Modal from './modal/modal';
import BoardIndexContainer from "./board/board_index_container";
import BoardShowContainer from "./board/board_show_container";
// import BoardCreateFormContainer from './board/board_create_form_container';



const App = () => (  
    <div>
        <header>
            <Navbar />
            
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </header>
            <Switch>
            <Landing exact path='/' component={Landing}/>

                <ProtectedRoute exact path="/settings" component={EditProfileContainer} />
                <ProtectedRoute exact path='/users/:userId/pins' component={ProfileContainer} />

                <ProtectedRoute exact path='/create-pin' component={PinCreateFormContainer} />
                <ProtectedRoute exact path='/home' component={PinIndexContainer} />
                <ProtectedRoute exact path='/pins/:pinId' component={PinShowContainer} />
                <ProtectedRoute exact path="/pins/:pinId/edit" component={PinEditFormContainer} />

                <ProtectedRoute exact path='/users/:userId/boards' component={BoardIndexContainer} />
                <ProtectedRoute exact path='/users/:userId/boards/:boardId' component={BoardShowContainer} />
                {/* <ProtectedRoute exact path='/create-board' component={BoardCreateFormContainer} /> */}
            </Switch>  
            <Modal />
    </div>
);

export default App;