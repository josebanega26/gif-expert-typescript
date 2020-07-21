import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App tests', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Component should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
