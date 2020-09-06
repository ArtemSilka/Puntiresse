import React from 'react';
import { Link } from 'react-router-dom'
import Landing from "../landing/landing";

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
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        let modal = document.getElementById('modal');
        modal.addEventListener('click', this.closeModal)
    }

    closeModal() {
        this.props.history.goBack();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(null, (error) => {
                this.setState({ errors: this.renderErrors() })
            })

    }

    demoLogin(e) {
        e.preventDefault();
        this.props.login({ email: 'demouser@puntiresse.com', password: 'password' })
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
        debugger
        const emailRedbox = this.emailErrors() ? 'redBox' : '';
        const pwdRedBox = this.passwordErrors() ? 'redBox' : '';

        return (
            <div id="modal" className="modal-container">
                <Link className="X Ia LS ad Z3 na eD rI" to='/'>
                    <img className="modal-x-button Ia LS ad Z3 hA- na eD rI" src={window.xURL} />
                    {/* <button 
                        className="modal-x-button Ia LS ad Z3 hA- na eD rI">
                    </button>  */}
                </Link>
                
                <Landing />

                <div className="modal-box-container">

                    <div className="modal-box oF">
                        <div className="logo">
                            <img src={window.logoURL} height="50px" width="50px" alt="Logo" />
                        </div>

                        <div className="welcome">
                            <h3>Welcome to Puntiresse</h3>
                        </div>

                        <div className="form-container">
                            <div className="form-container-box">
                                <div>
                                    <form onSubmit={this.handleSubmit} className="login-form">
                                        
                                        <div className="form1">
                                            <input 
                                                className={`einp wyq oF ${emailRedbox}`}
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
                                                className={`einp wyq oF ${pwdRedBox}`}
                                                type="password" 
                                                placeholder="Password" 
                                                value={this.state.password} 
                                                onChange={this.update('password')} 
                                                />
                                                <div className="err1">
                                                    <div className="err2 oF">
                                                        <span>{this.passwordErrors()}</span>
                                                    </div>
                                                </div>
                                        </div>
                                        {/* future options */}

                                            {/* <div className="already2 lef or1">
                                                <a>Forgot your password?</a>
                                            </div> */}

                                        <button className="sub-cont" type="submit">
                                            <div>Log in</div>
                                        </button>
                                        <div className="terms">
                                            <span className="or1">
                                                OR
                                            </span>
                                        </div>

                                        <button onClick={this.demoLogin} className="sub-cont pink" type="submit">
                                            <div>Demo Log in</div>
                                        </button>

                                        {/* future options */}

                                        {/* <button className="sub-fac dis" type="submit">
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
                                        </button> */}
                                    </form>
                                </div>
                                {/* future options */}

                                {/* <div className="terms">
                                    <span className="terms1">
                                        By continuing, you agree to Puntiresse's <a>Terms of Service</a>, <a>Privacy policy</a>
                                    </span>
                                </div> */}
                                <div className="already">
                                    <div className="already1">
                                        <div className="already2">
                                            <Link to='/signup'>Not on Pinterest yet? Sign up</Link>
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

export default LoginForm;
