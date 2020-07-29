import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const msp = ({ errors }) => ({
    user: { email: '', password: '' },
    errors: Object.values(errors.session)
});

const mdp = dispatch => ({
    login: user => dispatch(login(user))
});

export default connect(msp, mdp)(LoginForm);
