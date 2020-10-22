import React, { Component } from "react";
import "./App.css";
import CitySearch from "./CitySearch";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents } from "./api";
// import { mockdata } from "../mock-data"; // do we need to import mock data as we don't use it
import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    currentLocation: "all",
    locations: [],
    numberOfEvents: 32,
  };

  updateEvents = (location) => {
    // This update Events receives location param, and use this location param to filter the events below.
    // Either this location will be 'all', which means we get all events, or some city where we filter the events based on the city
    // But when I console.log the location, it's empty. Which means it's not passed correctly from where we call it.
    // And we need to jump to where we call this function. There are 2 places we call this function, one in NumberOfEvents, one in CitySearch
    // There is another place: in the test App.test.js
    // Need a bit of time to figure it out, but you understood or not?So far yes, not 100% but I'm getting it and think I need to play around a bit more nice! you can continue thank you! welcome!
    getEvents().then((response) => {
      const locationEvents =
        location === "all"
          ? response.events
          : response.events.filter((event) => event.location === location);
      const events = locationEvents.slice(0, this.state.numberOfEvents);
      return this.setState({
        events: events,
        currentLocation: location,
      });
    });

  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((response) => {
      if(this.mounted) {
      this.setState({ events: response.events, locations: response.locations });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} locations={this.state.locations} />
        <EventList events={this.state.events} />
        <NumberOfEvents updateEvents={this.updateEvents} locations={this.state.locations}/>
      </div>
    );
  }
}

export default App;
