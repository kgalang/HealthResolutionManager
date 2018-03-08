import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import OauthOptions from './OauthOptions';

class LogInForm extends Component {



    render() {
        return (
            <div className="login-form">
                <div>
                    {/* place logo here */}
                    <h2><strong>Log in</strong></h2>
                </div>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input className="btn"type="button" value="Submit" onClick={this.props.onClick}/>
                <OauthOptions />

                <Link to="/signup" className="link-to-sign-up">Don't have an account yet?</Link>
            </div>
        );
    }
}

export default LogInForm;