import React, { Component } from 'react';

const facebookLogo = "https://cdn.svgporn.com/logos/facebook.svg";

class OauthOptions extends Component {
    render() {
        return (
            <div className="login-form">
                <div>
                    {/* place logo here */}
                    <h3><strong>or Sign In With:</strong></h3>
                </div>
                <div>
                    <img src={facebookLogo} alt="facebook"/>
                </div>
            </div>
        );
    }
}

export default OauthOptions;