import tabData from '../tabs';
import tabBlock from './tabBlock';
import * as constants from '../actions/constants';

describe('tabBlock reducer', () => {
  const initialState = {
    tabs: tabData.tabs,
    selectedTab: tabData.tabs[0]
  };

  describe('when initializing', () => {
    it('sets the tabs and the selected tab', () => {
      expect(tabBlock(undefined, {})).toEqual(initialState);
    });
  });

  it('sets the selectedTab', () => {
    const id = 2;
    expect(tabBlock(initialState, { type: constants.SELECT_TAB, id }).selectedTab.id).toEqual(2);
  });
});
