import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from "../mock-data";

describe('<Event /> component', () => {
    let EventWrapper;
    beforeAll(() => { 
        EventWrapper = shallow(<Event event={mockData[0]}/>);
    });

    test('render event time and date', () => {
        expect(EventWrapper.find('.eventDate')).toHaveLength(1);
    });

    test('render event name', () => {
         expect(EventWrapper.find('.eventName')).toHaveLength(1);
    });

    test('render event details', () => {
        expect(EventWrapper.find('.eventDetails')).toHaveLength(1);
    });

    test('click on details button should expand event details', () => {
        EventWrapper.setState({
            showDetails: true
        });
        EventWrapper.find('.eventDetails').at(0).simulate("click");
        expect(EventWrapper.state('showDetails')).toBe(true);
    });

    test('click on details button should collapse event details', () => {
        EventWrapper.setState({
            showDetails: false
          });
        EventWrapper.find('.eventDetails').at(0).simulate("click");
        expect(EventWrapper.state('showDetails')).toBe(false);
    });

    // test('click on details button should collapse event details', () => {
    //     expect(EventWrapper.state('showDetails')).toEqual(false);
    //     EventWrapper.find('.details').simulate('click');
    //     expect(EventWrapper.find(mockData).prop('isOpen')).toEqual(false);
    // });
});
