import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import App from '../../client/src/components/App';
import Menu from '../../client/src/components/Menu'

const axios = require('axios');

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render App component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a modal menu component', () => {
    expect(wrapper.containsMatchingElement(<Menu />)).toEqual(true);
  });

  it('should have a state property to render modal conditionally', () => {
    expect(typeof wrapper.state('showMenu')).toBe('boolean');
  });

  it('should have a state property to contain restaurant data', () => {
    expect(typeof wrapper.state('restaurantData')).toBe('object');
  });

  it('should set modal to show with the showMenu method', () => {
    const instance = wrapper.instance();
    expect(wrapper.state('showMenu')).toBe(false);
    instance.showMenu();
    expect(wrapper.state('showMenu')).toBe(true);
  });

  it ('should set modal to hide with the hideMenu method', () => {
    const instance = wrapper.instance();
    expect(wrapper.state('showMenu')).toBe(false);
    instance.showMenu();
    instance.hideMenu();
    expect(wrapper.state('showMenu')).toBe(false);
  });

  // it ('should perform a get request', () => {
  //   sinon.spy(App.prototype, 'componentDidMount');
  //   expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
  // })
});



