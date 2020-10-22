import React from "react";
import { shallow } from "enzyme";
import { mount } from 'enzyme'
import App from "../App";
import EventList from "../EventList";
import CitySearch from "../CitySearch";
import NumberOfEvents from "../NumberOfEvents";
import { mockData } from "../mock-data";

describe('<App /> integration', () => {
  test("get list of events after the user selects a city", async () => {
    const AppWrapper = mount(<App />);
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    CitySearchWrapper.instance().handleItemClicked("Berlin, Germany");
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith('Berlin, Germany');
    AppWrapper.unmount();
  });

  test("change state after getting list of events", async () => {
    const AppWrapper = shallow(<App />);
    AppWrapper.instance().updateEvents("all");
    // When the location is all, then the events will be all. If the location is some specified city, then the events will be filtered based on that city
    // 
    await AppWrapper.update();
    // Here we expect the events to be equal to mock Data, which means the location should be `all`
    expect(await AppWrapper.state("events")).toStrictEqual(mockData);
    AppWrapper.unmount();
  });
});

describe("<App /> component", () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = mount(<App />);
  });

  test("render list of events", () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test("render CitySearch", () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test("render NumberOfEvents", () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });

  test("render correct list of events", () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({
      events: mockData,
    });
    expect(AppWrapper.find(".event")).toHaveLength(mockData.length);
    AppWrapper.unmount();
  });
});
