import { connect } from "react-redux";
import EditProfileForm from "./edit_profile";
import { updateUser } from "../../actions/user_actions";

const msp = state => ({
    errors: state.errors.user,
    currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    updateUser: (user) => dispatch(updateUser(user))
});

export default connect(msp, mdp)(EditProfileForm);