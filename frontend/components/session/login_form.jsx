import React from 'react';
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            errors: this.props.errors
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(null, (err) => {
                this.setState({ errors: this.renderErrors() })
            })

    }

    demoLogin(e) {
        e.preventDefault();
        this.props.login({ email: 'DemoUser@puntiresse.com', password: 'Password' })
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    renderErrors() {
        let noEmail = [];
        let wrongEmail = [];
        let wrongPassword = [];

        function emailCheck(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

        if (this.props.errors.includes("Invalid credentials")) {

            if (this.state.email === '') {
                noEmail.push("You missed a spot! Don’t forget to add your email.")
            } else if (!emailCheck(this.state.email)) {
                wrongEmail.push("Hmm...that doesn't look like an email address.")
            }
            else {
                wrongPassword.push(`The password you entered is incorrect. Try again`) // or ${<a href="">Reset your password</a>}
            }
        }
        if (noEmail.length) {
            return noEmail
        } else if (wrongEmail.length) {
            return wrongEmail
        } else if (wrongPassword.length) {
            return wrongPassword
        }
    }

    emailErrors() {
        if (this.state.errors[0] === "You missed a spot! Don’t forget to add your email."
            || this.state.errors[0] === "Hmm...that doesn't look like an email address.") {
            return this.state.errors;
        }
    }

    passwordErrors() {
        if (this.state.errors[0] === `The password you entered is incorrect. Try again`) { //or ${<a>Reset your password</a>}
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

                        <form onSubmit={this.handleSubmit} className="login-form">
                            <input 
                                type="text" 
                                placeholder="Email" 
                                value={this.state.email} 
                                onChange={this.update('email')} 
                                />
                                <span className="err">{this.emailErrors()}</span>
                            <input 
                                type="password" 
                                placeholder="Password" 
                                value={this.state.password} 
                                onChange={this.update('password')} 
                                />
                                <span className="err">{this.passwordErrors()}</span>
                            <input 
                                className="login-form-submit" 
                                type="submit" 
                                value="Log in" 
                                />
                            <button 
                                onClick={this.demoLogin} 
                                className="demo-login-button">Demo Log in
                            </button>

                            <p>By continuing, you agree to Puntiresse's <a>Terms of Service</a>, <a>Privacy policy</a></p>
                            
                            <div className="horizontal-line"></div>
                            
                            <p><Link to='/signup'>Not on Puntiresse yet? Sign up</Link></p>

                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;