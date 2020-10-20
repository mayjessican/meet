import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    number: 32
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ number: value });
    this.props.updateEvents(null, null, value);
  }

  render() {
    return(
      <div className="numberOfEvents">
        <input
          type="text"
          id="numberOfEvents input"
          value={this.state.number}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;