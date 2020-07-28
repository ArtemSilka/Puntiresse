import React from 'react';
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            errors: this.props.errors
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(null, (errors) => {
                this.setState({ errors: this.renderErrors() })
            })

    }

    demoLogin(e) {
        e.preventDefault();
        this.props.login({ username: 'DemoUser', password: 'Password' })
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        return (
            <div className="login-container">
                <button className="login-x-button"><Link to='/'>X</Link></button>

                <div className="login-box-container">
                    <div className="login-box">
                        <img src={window.logoURL} height="45px" width="45px" alt="Logo" />

                        <h3>Welcome to Puntiresse</h3>

                        <form onSubmit={this.handleSubmit} className="login-form">
                            <input 
                                type="text" 
                                placeholder="Username" 
                                value={this.state.username} 
                                onChange={this.update('username')} 
                                />
                            <input 
                                type="password" 
                                placeholder="Password" 
                                value={this.state.password} 
                                onChange={this.update('password')} 
                                />
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