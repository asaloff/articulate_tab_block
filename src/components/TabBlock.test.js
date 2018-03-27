import React from 'react';
import { shallow } from 'enzyme';
import TabBlock from './TabBlock';

describe('TabBlock', () => {
  const tabBlock = shallow(<TabBlock />);

  it('renders properly', () => expect(tabBlock).toMatchSnapshot());

  it('contains a connected TabHeader component', () => {
    expect(tabBlock.find('Connect(TabHeader)').exists()).toBe(true);
  });

  it('contains a connected TabContent component', () => {
    expect(tabBlock.find('Connect(TabContent)').exists()).toBe(true);
  });
});
