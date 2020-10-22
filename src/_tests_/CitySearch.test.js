import React from "react";
import { shallow } from "enzyme";
import CitySearch from "../CitySearch";
import { extractLocations } from "../api";
import { mockData } from "../mock-data";

const locations = extractLocations(mockData);

describe("<CitySearch locations={locations} /> integration", () => {
  test("get a list of cities when the user searches for Berlin", () => {
    const CitySearchWrapper = shallow(<CitySearch locations={locations} />);
    CitySearchWrapper.find(".city").simulate("change", {
      target: { value: "Berlin" },
    });
    expect(CitySearchWrapper.state("suggestions")).toEqual(["Berlin, Germany"]);
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

  test("renders a list of suggestions", () => {
    expect(CitySearchWrapper.find(".suggestions")).toHaveLength(0);
  });

  // test("renders a list of suggestions", () => {
  //   expect(CitySearchWrapper.find(".suggestions")).toHaveLength(1);
  // });

  test("renders text input correctly", () => {
    const query = CitySearchWrapper.state("query");
    expect(CitySearchWrapper.find(".city").prop("value")).toBe(query);
  });

  test("change state when text input changes", () => {
    const eventObject = { target: { value: "Berlin" } };
    CitySearchWrapper.find(".city").simulate("change", eventObject);
    expect(CitySearchWrapper.state("query")).toBe("Berlin");
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
    CitySearchWrapper.find(".suggestions li").at(0).simulate("click");
    expect(CitySearchWrapper.state("query")).toBe("London, UK");

    // CitySearchWrapper.find(".suggestions li").at(0).simulate("click");
    // expect(CitySearchWrapper.state("query")).toBe("Berlin, Germany");
  });
});
