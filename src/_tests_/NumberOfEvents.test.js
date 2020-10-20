import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}}/>);
  });

  test("render textbox element", () => {
    expect(NumberOfEventsWrapper.find(".numberOfEvents")).toHaveLength(1);
  });

  test("check number of events textbox is rendered correctly", () => {
    expect(NumberOfEventsWrapper.find(".numberOfEvents input")).toHaveLength(1);
  });

  test("check default value of number of events", () => {
    expect(
      NumberOfEventsWrapper.find(".numberOfEvents input").prop("value")
    ).toBe(32);
  });

  test("check changing the value of number of events", () => {
    NumberOfEventsWrapper.find(".numberOfEvents input").simulate("change", {
      target: { value: 20 },
    });
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(20);
  });
});
