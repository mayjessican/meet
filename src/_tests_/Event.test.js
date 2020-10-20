import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let EventWrapper;
    beforeAll(() => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
    });

  beforeEach(() => {
    EventWrapper.setState({ showDetails: false });
  });

  test("render enough information", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
    expect(EventWrapper.find(".time")).toHaveLength(1);
    expect(EventWrapper.find(".summary")).toHaveLength(1);
  });

  test("render correct information", () => {
    expect(EventWrapper.find(".time").text()).toEqual("2020-05-19T16:00:00+02:00 - 2020-05-19T17:00:00+02:00");
    expect(EventWrapper.find(".summary").text()).toEqual("Learn JavaScript");
  });

  test("click on details button should expand event details", () => {
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.find(".extra")).toHaveLength(1);
  });

  test("click on details button should collapse events", () => {
    EventWrapper.setState({ showDetails: true });
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.find(".extra")).toHaveLength(0);
  });

  test("click on details button should collapse event details", () => {
    EventWrapper.setState({ showDetails: true });
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.find(".extra")).toHaveLength(0);
  });

  test("Display extra info", () => {
    EventWrapper.setState({ showDetails: true });
    expect(EventWrapper.find(".extra .location")).toHaveLength(1);
    expect(EventWrapper.find(".extra .htmlLink")).toHaveLength(1);
    expect(EventWrapper.find(".extra .description")).toHaveLength(1);
  });

  test("Display correct extra info", () => {
    EventWrapper.setState({ showDetails: true });
    expect(EventWrapper.find(".extra .location").text()).toEqual(
      "Berlin, Germany"
    );
    expect(EventWrapper.find(".extra .htmlLink").prop("href")).toEqual(
      "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20"
    );
    expect(EventWrapper.find(".extra .description").text()).toEqual(
      "Have you wondered how you can ask Google to show you the list of the top ten must-see places in Berlin? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites."
    );
  });
});
