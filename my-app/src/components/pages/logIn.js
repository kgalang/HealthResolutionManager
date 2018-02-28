import React, { Component } from 'react';

import Slider from './logInSignUpComponent/Slider';
import LogInForm from './logInSignUpComponent/LogInForm';

class LogIn extends Component {
    render() {
        return (
            <div className="full">
                <Slider className="slider-box" />
                <LogInForm className="login-form full" />
            </div>
        );
    }
}

export default LogIn;