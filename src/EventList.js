import React, { Component } from "react";
import Event from "./Event"; // it's here

class EventList extends Component {
  state = {
    events: [],
  };
  // You pass the event prop from here to the Event component. Because events list is empty, then there is no event passed to the Event component
  // If you want to test the Event component, you need to use mockdata
  render() {
    return (
      <ul className="EventList">
        {this.state.events.map((event) => (
          <li key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
    );
  }
}

export default EventList;
