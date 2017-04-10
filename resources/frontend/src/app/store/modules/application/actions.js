/* ============
 * Application Actions
 * ============
 *
 * The actions available for the application module.
 */

import * as types from './mutation-types';

/**
 * Action fired to set the language of the website.
 *
 * @param {function} commit   Commit function to update the store.
 * @param {String}   language The new language.
 */
const setLanguage = ({ commit }, language) => {
  commit(types.SET_LANGUAGE, language);
};

/**
 * Action fired to fetch the language from the browser settings.
 *
 * @param {function} commit Commit function to update the store.
 */
const fetchLanguage = ({ commit }) => {
  commit(types.FETCH_LANGUAGE);
};

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
  setLanguage,
  fetchLanguage,
  toggleDrawer,
  showDrawer,
  hideDrawer,
};
