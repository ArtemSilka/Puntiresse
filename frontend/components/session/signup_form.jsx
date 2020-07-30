import React from 'react';
import { Link } from 'react-router-dom'

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: this.props.errors
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
            .then(null, (errors) => {
                this.setState({ errors: this.renderErrors() })
            });
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    renderErrors() {
        let noEmail = [];
        let wrongEmail = [];
        let emailExist = [];
        let wrongPassword = [];

        function emailCheck(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

        if (this.props.errors.includes("Email can't be blank")) {
            noEmail.push("You missed a spot! Don’t forget to add your email.");
            return noEmail;
        } else if (this.props.errors.includes("Email has already been taken")) {
            emailExist.push("Please use a different email.");
            return emailExist;
        } else if (!emailCheck(this.state.email)) {
            wrongEmail.push("Hmm...that doesn't look like an email address.");
            return wrongEmail;
        } else if (this.props.errors.includes("Password is too short (minimum is 6 characters)")) {
            wrongPassword.push("Your password is too short! You need 6+ characters.");
            return wrongPassword;
        }
    }

    emailErrors() {
        if (this.state.errors[0] === "You missed a spot! Don’t forget to add your email."
            || this.state.errors[0] === "Hmm...that doesn't look like an email address."
            || this.state.errors[0] === "Please use a different email.") {
            return this.state.errors;
        }
    }

    passwordErrors() {
        if (this.state.errors[0] === "Your password is too short! You need 6+ characters.") {
            return this.state.errors;
        }
    }

    render() {

        return (
            <div className="modal-container">
                <button
                    className="modal-x-button Ia LS ad Z3 hA- na eD rI">
                    <Link className="X" to='/'>X</Link> {/* <i class="fas fa-times"></i> */}
                </button>

                <div className="modal-box-container">

                    <div className="modal-box">
                        <img src={window.logoURL} height="45px" width="45px" alt="Logo" />

                        <h3>Welcome to Puntiresse</h3>
                        <h5>Find new ideas to try</h5>

                        <form onSubmit={this.handleSubmit} className="signup-form">
                            <input 
                                type="text" 
                                placeholder="email" 
                                value={this.state.email} 
                                onChange={this.update('email')} 
                                />
                                <span className="err">{this.emailErrors()}</span>                                   
                            <input 
                                type="password" 
                                placeholder="Create a password" 
                                value={this.state.password} 
                                onChange={this.update('password')} 
                                />
                                <span className="err">{this.passwordErrors()}</span>                                
                            <input 
                                className="signup-form-submit" 
                                type="submit" 
                                value="Continue" 
                                />

                            <p>By continuing, you agree to Puntiresse's <a>Terms of Service</a>, <a>Privacy policy</a></p>

                            <div className="horizontal-line"></div>
                            <p><Link to='/login'>Already a member? Log in</Link></p>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default SignupForm;