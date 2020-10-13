import React, { Component } from "react";

class Event extends Component {
  state = {
    showDetails: false,
  };

  onDetailsButtonClicked = () => {
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails,
    }));
  };

  render() {
    const event = this.props.event;
    return (
      <div className="Event">
        <p className="time">
          {event.start.dateTime} - {event.end.dateTime}
        </p>
        <p className="name">{event.name}</p>
        {this.state.showDetails && (
          <div className="extra">
            <p className="location">{event.location}</p>
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: event.description }}
            />
            <p className="visibility">{event.visibility}</p>
            <a className="link" href={event.link}>
              Event Link
            </a>
          </div>
        )}
        <button className="details-btn" onClick={this.onDetailsButtonClicked}>
          Details
        </button>
      </div>
    );
  }
}

export default Event;
