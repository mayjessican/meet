import React from "react";
import { shallow } from "enzyme";
import CitySearch from "../CitySearch";
import { extractLocations } from "../api";
import { mockData } from "../mock-data";

const locations = extractLocations(mockData);

describe("<CitySearch /> component", () => {
  let CitySearchWrapper;
  beforeAll(() => {
    CitySearchWrapper = shallow(<CitySearch locations={locations} />);
  });

  test("render text input", () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    expect(CitySearchWrapper.find(".city")).toHaveLength(1);
  });

  test("renders a list of suggestions", () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    expect(CitySearchWrapper.find(".suggestions")).toHaveLength(1);
  });

  test("renders text input correctly", () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    const query = CitySearchWrapper.state("query");
    expect(CitySearchWrapper.find(".city").prop("value")).toBe(query);
  });

  test("change state when text input changes", () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    const eventObject = { target: { value: "Berlin" } };
    CitySearchWrapper.find(".city").simulate("change", eventObject);
    expect(CitySearchWrapper.state("query")).toBe("Berlin");
  });

  test("render list of suggestions correctly", () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    const suggestions = CitySearchWrapper.state("suggestions");
    expect(CitySearchWrapper.find(".suggestions li")).toHaveLength(
      suggestions.length
    );
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(CitySearchWrapper.find(".suggestions li").at(i).text()).toBe(
        suggestions[i].name_string
      );
    }
  });

  test("selecting a suggestion should change query state", () => {
    const CitySearchWrapper = shallow(<CitySearch locations={locations} />);
    CitySearchWrapper.setState({
      suggestions: locations,
    });

    CitySearchWrapper.find(".suggestions li").at(0).simulate("click");
    expect(CitySearchWrapper.state("query")).toBe("Berlin, Germany");
  });
});
