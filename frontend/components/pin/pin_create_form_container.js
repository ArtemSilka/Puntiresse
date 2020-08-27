import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPin, savePin } from '../../actions/pin_actions';
import { fetchAllBoards } from '../../actions/board_actions';
import CreatePinForm from './pin_create_form';

const msp = state => {
    return {
    errors: Object.values(state.errors.pins),
    currentUser: state.session.currentUser,
    boards: Object.values(state.entities.boards)
}};

const mdp = dispatch => ({
    createPin: pin => dispatch(createPin(pin)),
    fetchAllBoards: () => dispatch(fetchAllBoards()),
    savePin: (pin) => dispatch(savePin(pin))
});

export default withRouter(connect(msp, mdp)(CreatePinForm));