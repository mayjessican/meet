import React, { Component } from "react";

class Event extends Component {
  state = {
    showDetails: false,
  };

  handleShowDetails = () => {
    if (this.state.showDetails === false) {
      this.setState({ showDetails: true });
    } else {
      this.setState({ showDetails: false });
    }
  };
  render() {
    const showDetails = this.state.showDetails;
    const Event = this.props.event;
    return (

    <div className="Event">
      <div className="eventOverview">
          <p className="eventName">{this.props.event.name}</p>
          <p className="eventDate">{this.props.event.date}</p>
          <p className="eventDetails">{this.props.event.details}</p>
          {showDetails &&
            <button className="showDetails" onClick={() => this.handleHideDetails()}>hide details</button>
          }
          {!showDetails &&
            <button className="showDetails" onClick={() => this.handleShowDetails()}>show details</button>
          }
      </div>
        {/* {showDetails &&
          <div className="eventDescription">
            <p className="eventDescription">{this.props.event.description}</p>
          </div>
        }, */}
    </div>);
  }}

export default Event;