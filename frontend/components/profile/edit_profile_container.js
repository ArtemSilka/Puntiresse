import { connect } from "react-redux";
import EditProfileForm from "./edit_profile";
import { updateUser } from "../../actions/user_actions";

const msp = state => { 
    return {
    errors: state.errors.user,
    currentUser: state.session.currentUser
}};

const mdp = dispatch => ({
    updateUser: (user) => dispatch(updateUser(user))
});

export default connect(msp, mdp)(EditProfileForm);