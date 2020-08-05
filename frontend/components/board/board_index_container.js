import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchAllBoards } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import ProfileBoardIndex from './board_index';

const msp = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        userId: ownProps.match.params.userId,
        user: state.entities.users[ownProps.match.params.userId],
        allBoards: state.entities.boards
    }
}

const mdp = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchAllBoards: () => dispatch(fetchAllBoards()),
    openModal: modal => dispatch(openModal(modal)),
})

export default connect(msp, mdp)(ProfileBoardIndex)