import React from 'react';
import { shallow } from 'enzyme';
import TabContent from './TabContent';
import tabData from '../tabs';

describe('TabContent', () => {
  const props = { selectedTab: tabData.tabs[0] };
  const tabContent = shallow(<TabContent {...props} />);

  it('renders properly', () => expect(tabContent).toMatchSnapshot());

  it('renders a TabContentElement component', () => {
    expect(tabContent.find('TabContentElement').exists()).toBe(true);
  });
});
