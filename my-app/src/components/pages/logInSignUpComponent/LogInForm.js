import React, { Component } from 'react';

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
                <input className="btn"type="button" value="Submit"/>
            </div>
        );
    }
}

export default LogInForm;