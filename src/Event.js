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
    // Problem is here. If you name if event you should find the class event, if you name it Event, then use class Event.
    // You can not expect to find class Event if you set it to be event.
    return (
      <div className="event">
        <p className="time">
          {event.start.dateTime} - {event.end.dateTime}
        </p>
        <p className="summary">{event.summary}</p>
        {this.state.showDetails && (
          <div className="extra">
            <p className="location">{event.location}</p>
            <p className="description">{event.description}</p>
            <a className="htmlLink" href={event.htmlLink}>
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
