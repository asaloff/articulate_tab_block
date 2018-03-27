import * as constants from './constants';

export function selectTab(id) {
  return {
    type: constants.SELECT_TAB,
    id
  };
}
