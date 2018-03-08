import React, { Component } from 'react';
import { connect } from "react-redux";
import NavBar from './dashboardComponent/NavBar'
import RequestsSection from './dashboardComponent/RequestsSection';
import { fetchYourHealthRequests } from '../../actions/healthRequests';

class Dashboard extends Component {
    render() {
        return (
            <div className="full page-background">
                <NavBar />
                
                <div className="dashboard">
                    <div className="dashboard-section">
                        <h2><strong>Requests</strong></h2>
                        <RequestsSection 
                            yourHealthRequests={this.props.yourHealthRequests}
                            getData={this.props.fetchYourHealthRequests}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            yourHealthRequests: state.healthRequests.yourHealthRequests
        };
    },
    {
        fetchYourHealthRequests: fetchYourHealthRequests
    }
)(Dashboard);