import React from 'react';
import { shallow } from 'enzyme';
import App from '../../client/src/components/App';

describe('App', () => {
  it('should render App component correctly', () => {
    const component = shallow(<App/>);
  
    expect(component).toMatchSnapshot();
  });

  it('should have state property to render the modal menu', () => {
    
  })
});



