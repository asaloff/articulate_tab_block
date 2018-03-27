import tabData from '../tabs';
import * as constants from '../actions/constants';

const initialState = {
  tabs: tabData.tabs,
  selectedTab: tabData.tabs[0]
};

const tabBlock = (state = initialState, action) => {
  switch (action.type) {
    case constants.SELECT_TAB:
      return {
        ...state,
        selectedTab: tabData.tabs.find(tab => tab.id === action.id)
      };
    default:
      return state;
  }
};

export default tabBlock;
