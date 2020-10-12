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

  // handleShowDetails = () => {
  //   if (this.state.showDetails === false) {
  //     this.setState({ showDetails: true });
  //   } else {
  //     this.setState({ showDetails: false });
  //   }
  // };
  render() {
    const event = this.props.event;
    return (
      <div className="Event">
        <p className="time">
          {event.time} - {event.date}
        </p>
        <p className="name">{event.name}</p>
        {event.group && event.group.name && (
          <p className="group-name">Group: {event.group.name}</p>
        )}
        <p className="going">{event.yes_rsvp_count} people who are going</p>
        {this.state.showDetails && (
          <div className="extra">
            {event.venue && event.venue.name && (
              <p className="address">
                {event.venue.name +
                  ", " +
                  event.venue.address_1 +
                  ", " +
                  event.venue.city +
                  ", " +
                  event.venue.localized_country_name}
              </p>
            )}
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
