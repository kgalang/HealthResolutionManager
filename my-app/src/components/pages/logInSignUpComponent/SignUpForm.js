import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import OauthOptions from './OauthOptions';

class SignUpForm extends Component {
    render() {
        return (
            <div className="login-form">
                <div>
                    {/* place logo here */}
                    <h2><strong>Sign Up</strong></h2>
                </div>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input className="btn"type="button" value="Submit"/>
                <OauthOptions />
                <Link to="/" className="link-to-log-in">Already have an account?</Link>
            </div>
        );
    }
}

export default SignUpForm;