import React, { Component } from "react";
import { mockData } from "./mock-data";
import { extractLocations } from "./api";

class CitySearch extends Component {
  state = {
    //locations: extractLocations(mockData),
    locations: this.props.locations,
    query: "Berlin, Germany",
    suggestions: [],
    showSuggestions: false,
  };

  handleInputChanged = (event) => {
    this.setState({ showSuggestions: true });
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });

    return this.setState({
      query: value,
      suggestions,
    });
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
    });
    this.props.updateEvents(suggestion);
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
        <ul className={
            this.state.showSuggestions ? "suggestions showSuggestions" : "display-none"
          }>
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >
              {suggestion}
            </li>
          ))}
          <li onClick={() => this.handleItemClicked("all")}>
            <b>See all cities</b>
          </li>
          ;
        </ul>
      </div>
    );
  }
}

export default CitySearch;
