/* ============
 * Scammer Mutations
 * ============
 *
 * The mutations available for the scammer module.
 */

import store from './../../index';
import {
  ALL,
  CREATED,
  UPDATED,
  DELETED,
} from './mutation-types';

export default {
  /**
   * Mutation to update the store with the fetched scammers.
   *
   * @param {Object} state The current state of the store.
   * @param {array} scammers The fetched scammers.
   * @param {Object} pagination The fetched pagination.
   */
  [ALL](state, { scammers, pagination }) {
    state.all = scammers;
    state.pagination = pagination;
  },

  /**
   * Mutation to respond to the action when a scammer has been created.
   *
   * @param {Object} state The current state of the store.
   * @param {array} scammer The scammer that has been created.
   */
  [CREATED](state, scammer) {
    const length = state.all.length;

    if (state.pagination.totalCount % state.pagination.limit === 0) {
      state.pagination.totalPages += 1;
    }

    if (state.pagination.limit > length) {
      state.all.push(scammer);
    }

    state.pagination.totalCount += 1;
  },

  /**
   * Mutation to respond to the action when a scammer has been updated.
   *
   * @param {Object} state The current state of the store.
   * @param {array} scammer The scammer that has been updated.
   */
  [UPDATED](state, scammer) {
    state.all = state.all.map((item) => {
      if (item.id === scammer.id) {
        item = scammer;
      }

      return item;
    });
  },

  /**
   * Mutation to respond to the action when a scammer has been deleted.
   *
   * @param {Object} state The current state of the store.
   */
  [DELETED](state) {
    let nextPage = state.pagination.currentPage;
    const lastPage =
      state.pagination.totalPages === state.pagination.currentPage
      && state.pagination.currentPage !== 1;

    const shouldSwitch = state.pagination.totalCount % state.pagination.limit === 1;

    if (lastPage && shouldSwitch) {
      nextPage = state.pagination.currentPage - 1;
    }

    store.dispatch('scammer/all', {
      limit: state.pagination.limit,
      page: nextPage,
    });
  },
};
