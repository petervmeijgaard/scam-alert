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
  FETCH_LANGUAGE,
  SET_LANGUAGE,
} from './mutation-types';

export default {
  /**
   * Mutation which will set the language.
   *
   * @param {Object} state    The current state of the store.
   * @param {String} language The new language.
   */
  [SET_LANGUAGE](state, language) {
    state.language = language;
  },

  /**
   * Mutation which will fetch the language from the browser.
   *
   * @param {Object} state The current state of the store.
   */
  [FETCH_LANGUAGE](state) {
    const language = navigator.language || navigator.userLanguage;

    state.language = language ? language.split('-')[0] : 'en';
  },

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
