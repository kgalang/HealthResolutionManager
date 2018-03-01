import React, { Component } from 'react';

import Slider from './logInSignUpComponent/Slider';
import SignUpForm from './logInSignUpComponent/SignUpForm';

class SignUp extends Component {
    render() {
        return (
            <div className="full background-image">
                <SignUpForm className="login-form full" />
                <Slider className="slider-box" />
            </div>
        );
    }
}

export default SignUp;