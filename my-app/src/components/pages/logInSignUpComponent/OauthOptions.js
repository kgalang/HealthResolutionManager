import React, { Component } from 'react';

const facebookLogo = "https://cdn.svgporn.com/logos/facebook.svg";
const googleLogo = "https://cdn.svgporn.com/logos/google-icon.svg";

class OauthOptions extends Component {
    render() {
        return (
            <div className="oauth-form">
                <div>
                    {/* place logo here */}
                    <h3><strong>or Sign In With:</strong></h3>
                </div>
                <div className="oauth-logos">
                    <img src={googleLogo} alt="google"/>
                    <img src={facebookLogo} alt="facebook"/>
                </div>
            </div>
        );
    }
}

export default OauthOptions;