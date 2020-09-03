import { connect } from 'react-redux';
import Navbar from './nav_bar';

import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = state => ({
    currentUser: state.session.currentUser,
});

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: () => dispatch(openModal()),
    closeMOdal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(Navbar);