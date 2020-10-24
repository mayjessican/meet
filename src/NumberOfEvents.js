import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32
  };

  handleInputChanged = (eventCount) => {
    const value = eventCount.target.value;
    this.setState({ numberOfEvents: value });
    this.props.updateEvents(value);
    console.log(this.props.updateEvents)
  }

  render() {
    return(
      <div className="numberOfEvents">
        <label>NUmber of Events:</label>
        <input
          type="text"
          id="numberOfEvents input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;