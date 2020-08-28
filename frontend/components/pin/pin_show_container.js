import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPin, savePin } from '../../actions/pin_actions';
import PinShow from './pin_show';
import { fetchAllBoards } from '../../util/board_api_util';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    const boards = Object.values(state.entities.boards).map(
        (board) => board);
    return {
        user: state.session.currentUser,
        pin: state.entities.pins[ownProps.match.params.pinId],
        boards
    };
};

const mdp = (dispatch) => {
    return {
        fetchPin: (pinId) => dispatch(fetchPin(pinId)),
        fetchAllBoards: () => dispatch(fetchAllBoards),
        savePin: (pin) => dispatch(savePin(pin)),
        openModal: (pinId) => dispatch(openModal(pinId)),
        closeMOdal: () => dispatch(closeModal())
    }
}

export default withRouter(connect(msp, mdp)(PinShow));