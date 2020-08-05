import { connect } from 'react-redux';
import { fetchAllUsers, fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import Profile from './profile';

const msp = (state, ownProps) => {
    return {
        currentUser: state.session.currentUser,
        userId: ownProps.match.params.userId,
        user: state.entities.users[ownProps.match.params.userId],
    }
}

const mdp = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    openModal: modal => dispatch(openModal(modal)),
})

export default connect(msp, mdp)(Profile)