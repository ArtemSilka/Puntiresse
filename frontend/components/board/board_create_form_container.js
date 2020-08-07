import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions'
import BoardCreateForm from './board_create_form';

const msp = (state, ownProps) => {
    return {
        userId: state.session.currentUser.id,
        errors: state.errors.boards

}}

const mdp = dispatch => ({
    createBoard: board => dispatch(createBoard(board)),
    closeModal: () => dispatch(closeModal()),
})

export default connect(msp, mdp)(BoardCreateForm)