import tabData from '../tabs';
import * as constants from '../actions/constants';

const initialState = {
  tabs: tabData.tabs,
  selectedTab: tabData.tabs[0],
  fullPageImage: false,
  themeStyles: tabData.themeStyles
};

const tabBlock = (state = initialState, action) => {
  switch (action.type) {
    case constants.SELECT_TAB:
      return {
        ...state,
        selectedTab: tabData.tabs.find(tab => tab.id === action.id)
      };
    case constants.SET_FULL_PAGE_IMAGE:
      return {
        ...state,
        fullPageImage: true
      };
    case constants.REMOVE_FULL_PAGE_IMAGE:
      return {
        ...state,
        fullPageImage: false
      };
    default:
      return state;
  }
};

export default tabBlock;
