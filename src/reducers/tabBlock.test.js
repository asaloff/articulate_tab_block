import tabData from '../tabs';
import tabBlock from './tabBlock';
import * as constants from '../actions/constants';

describe('tabBlock reducer', () => {
  const initialState = {
    tabs: tabData.tabs,
    selectedTab: tabData.tabs[0],
    fullPageImage: false
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

  it('sets the full page image', () => {
    expect(tabBlock(initialState, { type: constants.SET_FULL_PAGE_IMAGE }).fullPageImage).toBe(true);
  });

  it('removes the full page image', () => {
    initialState.fullPageImage = true;
    expect(tabBlock(initialState, { type: constants.REMOVE_FULL_PAGE_IMAGE }).fullPageImage).toBe(false);
  });
});
