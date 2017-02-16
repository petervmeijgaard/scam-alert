/* ============
 * Application Actions
 * ============
 *
 * The actions available for the application module.
 */

import * as types from './mutation-types';

/**
 * Action fired to toggle the drawer.
 *
 * @param {function} commit Commit function to update the store.
 */
const toggleDrawer = ({ commit }) => {
  commit(types.TOGGLE_DRAWER);
};

/**
 * Action fired to show the drawer.
 *
 * @param {function} commit Commit function to update the store.
 */
const showDrawer = ({ commit }) => {
  commit(types.SHOW_DRAWER);
};

/**
 * Action fired to hide the drawer.
 *
 * @param {function} commit Commit function to update the store.
 */
const hideDrawer = ({ commit }) => {
  commit(types.HIDE_DRAWER);
};

export default {
  toggleDrawer,
  showDrawer,
  hideDrawer,
};
