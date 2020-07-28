import { connect } from 'react-redux';
import Navbar from './nav_bar';

import { logout } from '../../actions/session_actions';

const msp = state => ({
    currentUser: state.session.currentUser,
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(msp, mdp)(Navbar);