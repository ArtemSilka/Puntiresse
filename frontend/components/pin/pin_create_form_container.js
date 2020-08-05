import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPin } from '../../actions/pin_actions';
import CreatePinForm from './pin_create_form';

const msp = state => ({
    errors: Object.values(state.errors.pins),
    currentUser: state.session.currentUser
});

const mdp = dispatch => ({
    createPin: pin => dispatch(createPin(pin))
});

export default withRouter(connect(msp, mdp)(CreatePinForm));