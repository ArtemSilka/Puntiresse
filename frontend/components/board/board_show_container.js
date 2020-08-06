import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchBoard } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import BoardShow from './board_show';

const msp = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        userId: ownProps.match.params.userId,
        user: state.entities.users[ownProps.match.params.userId],
        boardId: ownProps.match.params.boardId,
        board: state.entities.boards
    }
}

const mdp = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(msp, mdp)(BoardShow)