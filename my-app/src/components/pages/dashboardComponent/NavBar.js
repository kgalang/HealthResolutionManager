import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

const navIcon = "https://cdn.svgporn.com/logos/cloudinary.svg";

class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <div>
                    <img className="nav-icon" src={navIcon} alt="Sky Solutions Logo"/>
                </div>
                <div className="nav-links">
                    <strong className="nav-link">Dashboard</strong>
                    <strong className="nav-link">Your Plan</strong>
                    <strong className="nav-link">Submit Request</strong>
                    <strong className="nav-link">History</strong>
                    <strong className="nav-link">Help</strong>
                </div>
            </div>
        );
    }
}

export default NavBar;