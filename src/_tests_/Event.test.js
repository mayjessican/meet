import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let EventWrapper;
  //   beforeAll(() => {
  //     EventWrapper = shallow(<Event event={mockData[0]} />);
  //   });

  beforeAll(() => {
    EventWrapper = shallow(
      <Event
        event={{
          date: "2020-05-19",
          time: "16:00",
          name: "Learn JavaScript",
          yes_rsvp_count: 90,
          link:
            "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
          description:
            "Have you wondered how you can ask Google to show you the list of the top ten must-see places in Berlin? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
          visibility: "public",
          venue: {
            name: "Google",
            address_1: "1 Lovely Road",
            city: "Berlin",
            localized_country_name: "Germany",
          },
          group: "Learn JavaScript - Berlin",
        }}
      />
    );
  });

  beforeEach(() => {
    EventWrapper.setState({ showDetails: false });
  });

  test("render enough information", () => {
    expect(EventWrapper.find(".Event")).toHaveLength(1);
    expect(EventWrapper.find(".time")).toHaveLength(1);
    expect(EventWrapper.find(".name")).toHaveLength(1);
    expect(EventWrapper.find(".going")).toHaveLength(1);
  });

  test("render correct information", () => {
    expect(EventWrapper.find(".time").text()).toEqual("16:00 - 2020-05-19");
    expect(EventWrapper.find(".name").text()).toEqual("Learn JavaScript");
    expect(EventWrapper.find(".going").text()).toEqual(
      "90 people who are going"
    );
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

  test("click on details button should expand event details", () => {
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.find(".extra")).toHaveLength(1);
  });

  test("click on details button should collapse event details", () => {
    EventWrapper.setState({ showDetails: true });
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.find(".extra")).toHaveLength(0);
  });

  test("Display extra info", () => {
    EventWrapper.setState({ showDetails: true });
    expect(EventWrapper.find(".extra .address")).toHaveLength(1);
    expect(EventWrapper.find(".extra .visibility")).toHaveLength(1);
    expect(EventWrapper.find(".extra .link")).toHaveLength(1);
    expect(EventWrapper.find(".extra .description")).toHaveLength(1);
  });

  test("Display correct extra info", () => {
    EventWrapper.setState({ showDetails: true });
    expect(EventWrapper.find(".extra .address").text()).toEqual(
      "Google, 1 Lovely Road, Berlin, Germany"
    );
    expect(EventWrapper.find(".extra .visibility").text()).toEqual("public");
    expect(EventWrapper.find(".extra .link").prop("href")).toEqual(
      "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20"
    );
    expect(EventWrapper.find(".extra .description").html()).toEqual('<div class="description">Have you wondered how you can ask Google to show you the list of the top ten must-see places in Berlin? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.</div>');
});
});
