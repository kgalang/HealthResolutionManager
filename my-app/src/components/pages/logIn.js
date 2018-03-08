import React, { Component } from 'react';
import { connect } from "react-redux";
import { login, logout } from "../../actions/login";
import { Redirect } from "react-router";

import Slider from './logInSignUpComponent/Slider';
import LogInForm from './logInSignUpComponent/LogInForm';
import * as loginActions from "../../actions/login";

class LogIn extends Component {

    render() {
        console.log(this.props.history);
        return !this.props.loggedIn ? (
            <div className="full background-image">
                <Slider className="slider-box" />
                <LogInForm className="login-form full" onClick={this.props.onClick}/>
            </div>
        ) : (
            <Redirect to="/dashboard"/>
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