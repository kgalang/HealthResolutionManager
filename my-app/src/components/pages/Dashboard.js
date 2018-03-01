import React, { Component } from 'react';
import NavBar from './dashboardComponent/NavBar'

class Dashboard extends Component {
    render() {
        return (
            <div className="full page-background">
                <NavBar />
                
                <div className="dashboard-content-title">
                    <h2><strong>Requests</strong></h2>
                </div>
            </div>
        );
    }
}

export default Dashboard;