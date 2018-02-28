import React, { Component } from 'react';

import Slider from './logInSignUpComponent/Slider';
import SignUpForm from './logInSignUpComponent/SignUpForm';

class SignUp extends Component {
    render() {
        return (
            <div className="full">
                <SignUpForm className="login-form full" />
                <Slider className="slider-box" />
            </div>
        );
    }
}

export default SignUp;