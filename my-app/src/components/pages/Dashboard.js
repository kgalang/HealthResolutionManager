import React, { Component } from 'react';
import NavBar from './dashboardComponent/NavBar'
import RequestOverview from './dashboardComponent/RequestOverview';

class Dashboard extends Component {
    render() {
        return (
            <div className="full page-background">
                <NavBar />
                
                <div className="dashboard">
                    <div className="dashboard-section">
                        <h2><strong>Requests</strong></h2>
                        <div className="dashboard-content">
                            <h5><strong>Number of Requests in Progress:</strong></h5>
                            <RequestOverview />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;