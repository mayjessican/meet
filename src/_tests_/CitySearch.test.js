import React from "react";
import { shallow, mount } from "enzyme";
import CitySearch from "../CitySearch";
import { extractLocations } from "../api";
import { mockData } from "../mock-data";
import App from "../App";

const locations = extractLocations(mockData);

describe("<CitySearch locations={locations} /> integration", () => {
  test("get a list of cities when the user searches for Berlin", () => {
    const CitySearchWrapper = shallow(<CitySearch locations={locations} />);
    CitySearchWrapper.find(".city").simulate("change", {
      target: { value: "Berlin" },
    });
    expect(CitySearchWrapper.state("suggestions")).toEqual(["Berlin, Germany"]);
  });

  test("get list of events after user selects a city", async () => {
    const AppWrapper = mount(<App />);
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    CitySearchWrapper.instance().handleItemClicked("value");
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
  });
});

describe("<CitySearch locations={locations} /> component", () => {
  let CitySearchWrapper;
  beforeAll(() => {
    CitySearchWrapper = shallow(<CitySearch locations={locations} />);
  });

  test("render text input", () => {
    expect(CitySearchWrapper.find(".city")).toHaveLength(1);
  });

  test("renders text input correctly", () => {
    const query = CitySearchWrapper.state("query");
    expect(CitySearchWrapper.find(".city").prop("value")).toBe(query);
  });

  test("updates the input correctly", () => {
    CitySearchWrapper.find('input[type="text"]').simulate("change", {
      target: {
        value: "Berlin",
      },
    });
    expect(CitySearchWrapper.find('input[type="text"]').prop("value")).toEqual(
      "Berlin"
    );
  });

  test("change state when text input changes", () => {
    const eventObject = { target: { value: "Berlin" } };
    CitySearchWrapper.find(".city").simulate("change", eventObject);
    expect(CitySearchWrapper.state("query")).toBe("Berlin");
  });

  test("render list of suggestions correctly", () => {
    const CitySearchWrapper = shallow(
      <CitySearch updateEvents={() => {}} locations={locations} />
    );
    const suggestions = CitySearchWrapper.state("suggestions");
    expect(CitySearchWrapper.find(".suggestions li")).toHaveLength(
      suggestions.length
    );
  });

  test("renders a list of suggestions correctly", () => {
    const CitySearchWrapper = shallow(
      <CitySearch updateEvents={() => {}} locations={locations} />
    );
    CitySearchWrapper.find('input[type="text"]').simulate("change", {
      target: {
        value: "Berlin",
      },
    });
    expect(CitySearchWrapper.find(".suggestions li")).toHaveLength(2);
    CitySearchWrapper.find(".suggestions li").at(0).simulate("click");
    expect(CitySearchWrapper.state("query")).toBe("Berlin, Germany");
    expect(CitySearchWrapper.find(".suggestions li")).toHaveLength(0);
  });

  test("selecting a suggestion should change query state", () => {
    const CitySearchWrapper = shallow(
      <CitySearch updateEvents={() => {}} locations={locations} />
    );
    CitySearchWrapper.setState({
      suggestions: locations,
    });
    CitySearchWrapper.find('input[type="text"]').simulate("change", {
      target: {
        value: "London",
      },
    });
  });
});
