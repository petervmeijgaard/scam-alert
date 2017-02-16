/* ============
 * Application Mutations
 * ============
 *
 * The mutations available for the application module.
 */

import {
  TOGGLE_DRAWER,
  SHOW_DRAWER,
  HIDE_DRAWER,
} from './mutation-types';

export default {
  /**
   * Mutation which will toggle the drawer.
   *
   * @param {Object} state The current state of the store.
   */
  [TOGGLE_DRAWER](state) {
    state.drawerActive = !state.drawerActive;
  },

  /**
   * Mutation which will show the drawer.
   *
   * @param {Object} state The current state of the store.
   */
  [SHOW_DRAWER](state) {
    state.drawerActive = true;
  },

  /**
   * Mutation which will hide the drawer.
   *
   * @param {Object} state The current state of the store.
   */
  [HIDE_DRAWER](state) {
    state.drawerActive = false;
  },
};
