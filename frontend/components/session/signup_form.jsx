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

    render() {
        return (
            <div className="signup-container">
                <button className="signup-x-button"><Link to='/'>X</Link></button>

                <div className="signup-box-container">

                    <div className="signup-box">
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
                            <input 
                                type="password" 
                                placeholder="Create a password" 
                                value={this.state.password} 
                                onChange={this.update('password')} 
                                />
                            
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