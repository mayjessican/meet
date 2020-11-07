import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (eventCount) => {
    const value = eventCount.target.value;
    this.setState({ numberOfEvents: value });
    this.props.updateEvents(null, value);

    if (value < 1) {
      this.setState({
        infoText: "Select number from 1 to 32",
      });
    } else {
      this.setState({
        infoText: "",
      });
    }
  };

  render() {
    return (
      <div className="numberOfEvents">
        <label>Number of Events:</label>
        <input
          type="text"
          id="numberOfEvents input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
        <ErrorAlert text={this.state.infoText} />
      </div>
    );
  }
}

export default NumberOfEvents;
