import React, { Component } from "react";
import { mockData } from "./mock-data";
import { extractLocations } from "./api";

class CitySearch extends Component {
  state = {
    locations: extractLocations(mockData),
    query: "Berlin, Germany",
    suggestions: [],
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
  };

  handleItemClicked = (value) => {
    this.setState({ query: value });
  };

  render() {
    return (
      <div className="CitySearch">
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
        <ul className="suggestions">
          {this.state.suggestions.map((suggestion) => (
            <li 
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}>{suggestion}</li>
            // <li
            //   key={suggestion.name_string}
            //   onClick={() => this.handleItemClicked(suggestion.name_string)}
            // >
            //   {suggestion.name_string}
            // </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CitySearch;
