import { connect } from 'react-redux';
import { fetchPin, updatePin, deletePin } from '../../actions/pin_actions';
import { fetchBoard } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions'
import PinEditForm from './pin_edit_form';

const msp = (state, ownProps) => {
    return {
        pin: Object.values(state.entities.pins)[0],
        currentUser: state.session.currentUser,
        user: Object.values(state.entities.users)[0]
    }
}

const mdp = dispatch => ({
    fetchPin: pinId => dispatch(fetchPin(pinId)),
    updatePin: pin => dispatch(updatePin(pin)),
    deletePin: pinId => dispatch(deletePin(pinId)),
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(PinEditForm)