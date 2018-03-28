import * as actions from './tabs';
import * as constants from './constants';

it('creates an action to set the selected tab', () => {
  const id = 1;
  expect(actions.selectTab(id))
    .toEqual({
      type: constants.SELECT_TAB,
      id
    });
});

it('creates an action to set a full page image', () => {
  expect(actions.setFullPageImage()).toEqual({ type: constants.SET_FULL_PAGE_IMAGE });
});

it('creates an action to remove a full page image', () => {
  expect(actions.removeFullPageImage()).toEqual({ type: constants.REMOVE_FULL_PAGE_IMAGE });
});
