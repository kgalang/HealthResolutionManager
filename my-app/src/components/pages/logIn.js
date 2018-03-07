import React, { Component } from 'react';
import { connect } from "react-redux";
import { login, logout } from "../../actions/login";
import { browserHistory } from "react-router";

import Slider from './logInSignUpComponent/Slider';
import LogInForm from './logInSignUpComponent/LogInForm';
import * as loginActions from "../../actions/login";

class LogIn extends Component {

    render() {
        return !this.props.loggedIn ? (
            <div className="full background-image">
                <Slider className="slider-box" />
                <LogInForm className="login-form full" onClick={this.props.onClick}/>
            </div>
        ) : (
            <div>
                <h1>You're Logged In</h1>
            </div>
        )
    }
}

export default connect(
    state => ({
        loggedIn: state.login.isLoggedIn
    }),
    (dispatch) => ({
        onClick: () => dispatch(loginActions.login())
    })
)(LogIn);