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
