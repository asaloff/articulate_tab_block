import React from 'react';
import { shallow } from 'enzyme';
import TabHeader from './TabHeader';
import tabData from '../tabs';

describe('TabHeader', () => {
  const mockSelectTab = jest.fn();
  const props = {
    tabs: tabData.tabs,
    selectedTab: tabData.tabs[0],
    selectTab: mockSelectTab
  };
  const tabHeader = shallow(<TabHeader {...props} />);

  it('renders properly', () => expect(tabHeader).toMatchSnapshot());

  it('renders the correct tab titles', () => {
    tabData.tabs.forEach(tab => {
      expect(tabHeader.find(`span[id=${tab.id}]`).text()).toEqual(tab.title);
    });
  });

  it('adds a selected class to the selected tab', () => {
    expect(tabHeader.find('span[id=1]').hasClass('selected')).toBe(true);
  });

  describe('when the user clicks a tab title', () => {
    beforeEach(() => {
      tabHeader.find('span[id=3]').simulate('click');
    });

    it('calls the selectTab action', () => {
      expect(mockSelectTab).toHaveBeenCalledWith(3);
    });
  });
});
