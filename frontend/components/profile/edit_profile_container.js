import { connect } from "react-redux";
import EditProfileForm from "./edit_profile";
import { fetchUser, updateUser } from "../../actions/user_actions";

const msp = (state, ownProps) => { 
    return {
    errors: state.errors.user,
    currentUser: state.session.currentUser,
    userId: ownProps.match.params.userId,
    user: state.entities.users[ownProps.match.params.userId]
}};

const mdp = dispatch => ({
    updateUser: (user) => dispatch(updateUser(user)),
    fetchUser: userId => dispatch(fetchUser(userId)),
});

export default connect(msp, mdp)(EditProfileForm);