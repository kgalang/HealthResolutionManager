import React, { Component } from 'react';

let progressBarValue = {
    width: "50%"
};

class RequestOverview extends Component {
    render() {
        return (
            <div className="request-overview">
                <div className="request-info">
                    <p><strong>Request Category - Request Title</strong></p>
                    <p><em>Current Status</em></p>
                    <div className="request-links">
                        <p>Details | Edit | Cancel</p>
                    </div>
                </div>
                <div className="request-progress-bar">
                    <ul className="progress-labels">
                        <li className="progress-label"><small>Submitted</small></li>
                        <li className="progress-label"><small>Reviewed</small></li>
                        <li className="progress-label"><small>Approved</small></li>
                    </ul>
                    <div className="progress">
                        <div className="progress-bar bg-success" style={progressBarValue}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RequestOverview;