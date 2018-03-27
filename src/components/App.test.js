import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a TabBlock component', () => {
    expect(app.find('TabBlock').exists()).toBe(true);
  });
});
