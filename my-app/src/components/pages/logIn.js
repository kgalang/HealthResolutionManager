import React, { Component } from 'react';
import { connect } from "react-redux";
import { login, logout } from "../../actions/login"

import Slider from './logInSignUpComponent/Slider';
import LogInForm from './logInSignUpComponent/LogInForm';

class LogIn extends Component {
    render() {
        return this.props.loggedIn ? (
            <div className="full background-image">
                <Slider className="slider-box" />
                <LogInForm className="login-form full" />
            </div>
        ) : (
            <div>
                <h1>You're Logged Out</h1>
            </div>
        )
    }
}

export default connect(
    state => ({
        loggedIn: state.login.isLoggedIn
    }),
    () => ({})
)(LogIn);