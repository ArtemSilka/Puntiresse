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
                <Link className="X Ia LS ad Z3 hA- na eD rI" to='/'>
                    <button
                        className="modal-x-button Ia LS ad Z3 hA- na eD rI">
                        X {/* <i class="fas fa-times"></i> */}
                    </button>
                </Link>

                <div className="modal-box-container">

                    <div className="modal-box oF">
                        <div className="logo">
                            <img src={window.logoURL} height="50px" width="50px" alt="Logo" />
                        </div>
                        <div className="welcome">
                            <h3>Welcome to Puntiresse</h3>
                        </div>
                        <div className="idea">
                            <h3>Find new ideas to try</h3>
                        </div>
                        <div className="form-container">
                            <div className="form-container-box">
                                <div>
                                    <form onSubmit={this.handleSubmit} className="signup-form">

                                        <div className="form1">
                                            <input
                                                className="einp wyq oF"
                                                type="text" 
                                                placeholder="Email" 
                                                value={this.state.email} 
                                                onChange={this.update('email')} 
                                                />
                                                <div className="err1">
                                                    <div className="err2 oF">
                                                        <span>{this.emailErrors()}</span>                                   
                                                    </div>
                                                </div>
                                        </div>

                                        <div className="form1">
                                            <input 
                                                className="einp wyq oF"
                                                type="password" 
                                                placeholder="Create a password" 
                                                value={this.state.password} 
                                                onChange={this.update('password')} 
                                                />
                                                <div className="err1">
                                                    <div className="err2 oF">
                                                        <span>{this.passwordErrors()}</span>
                                                    </div>
                                                </div>                                
                                        </div>

                                        <button className="sub-cont" type="submit">
                                            <div>Continue</div>
                                        </button>
                                        <div className="terms">
                                            <span className="or1">
                                                OR
                                            </span>
                                        </div>

                                        {/* future options */}
                                        <button className="sub-fac dis" type="submit">
                                            <div className="dis">
                                                <img className="bbb" src={window.facebookURL} height="24px" width="24px" alt="Logo" />
                                                <div className="bbb bBb">Continue with Facebook</div>
                                            </div>
                                        </button>

                                        <button className="sub-goo dis" type="submit">
                                            <div className="dis">
                                                <img className="bbb" src={window.googleURL} height="24px" width="24px" alt="Logo" />
                                                <div className="bbb bBb grey">Continue with Google</div>
                                            </div>
                                        </button>
                                    </form>
                                </div>
                                <div className="terms">
                                    <span className="terms1">
                                            By continuing, you agree to Puntiresse's <a>Terms of Service</a>, <a>Privacy policy</a>
                                    </span>
                                </div>
                                <div className="already">
                                    <div className="already1">
                                        <div className="already2">
                                            <Link to='/login'>Already a member? Log in</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupForm;