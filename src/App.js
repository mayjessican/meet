import React, { Component } from "react";
import "./App.css";
import CitySearch from "./CitySearch";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents } from "./api";
import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    currentLocation: "all",
    locations: [],
    numberOfEvents: 32,
  };

  async componentDidMount() {
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

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location)
        .length;
      const city = location.split(" ").shift();
      return { city, number };
    });
    return data;
  };

  updateEvents = (location) => {
    //const { currentLocation, numberOfEvents } = this.state;
    if (location) {
    getEvents().then((response) => {
      const locationEvents =
        location === "all"
          ? response.events
          : response.events.filter((event) => event.location === location);
      const events = locationEvents.slice(0, this.state.numberOfEvents);
      return this.setState({
        events: events,
        currentLocation: location,
        locations: response.locations,
      });
    });
  }
  };

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
