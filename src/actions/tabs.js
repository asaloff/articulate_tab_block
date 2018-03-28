import * as constants from './constants';

export function selectTab(id) {
  return { type: constants.SELECT_TAB, id };
}

export function setFullPageImage() {
  return { type: constants.SET_FULL_PAGE_IMAGE };
}

export function removeFullPageImage() {
  return { type: constants.REMOVE_FULL_PAGE_IMAGE };
}
