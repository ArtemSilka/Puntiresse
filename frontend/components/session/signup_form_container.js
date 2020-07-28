import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form'

const msp = ({ errors }) => ({
    user: { username: '', password: '' },
    errors: Object.values(errors.session)
})

const mdp = dispatch => ({
    signup: user => dispatch(signup(user))
});

export default connect(msp, mdp)(SignupForm);