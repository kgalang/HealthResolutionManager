import React, { Component } from "react";
import RequestOverview from "./RequestOverview";

export class RequestsSection extends Component {
  componentWillMount() {
    this.props.getData();
  }
  render() {
    return (
        <div className="dashboard-content">
            <h5><strong>Number of Requests in Progress:  {this.props.yourHealthRequests.length}</strong></h5>
            {
                this.props.yourHealthRequests
                ? this.props.yourHealthRequests.map(healthRequest => (
                    <RequestOverview key={healthRequest.id} category={healthRequest.category} title={healthRequest.title} status={healthRequest.status} />
                  ))
                : <RequestOverview category="Error" title="Didn't get data" />
            }
        </div>
    );
  }
}

export default RequestsSection;
