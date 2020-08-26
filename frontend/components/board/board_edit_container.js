import { connect } from 'react-redux';
import { updateBoard, deleteBoard } from '../../actions/board_actions';
import { deletePin } from '../../actions/pin_actions';
import { closeModal } from '../../actions/modal_actions'
import BoardEdit from './board_edit';

const msp = (state, ownProps) => {
    return {
        board: Object.values(state.entities.boards)[0]
    }
}

const mdp = dispatch => ({
    updateBoard: board => dispatch(updateBoard(board)),
    deleteBoard: boardId => dispatch(deleteBoard(boardId)),
    deletePin: pinId => dispatch(deletePin(pinId)),
    closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(BoardEdit)