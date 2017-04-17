/* ============
 * Scammer Mutations
 * ============
 *
 * The mutations available for the scammer module.
 */

import store from 'store';
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
   * @param {Object} state      The current state of the store.
   * @param {Array}  scammers   The fetched scammers.
   * @param {Object} pagination The fetched pagination.
   */
  [ALL](state, { scammers, pagination }) {
    state.all = scammers;
    state.pagination = pagination;
  },

  /**
   * Mutation to respond to the action when a scammer has been created.
   *
   * @param {Object} state   The current state of the store.
   * @param {Object} scammer The scammer that has been created.
   */
  [CREATED](state, scammer) {
    const {
      totalCount,
      limit,
    } = state.pagination;

    state.pagination.totalCount += 1;

    if (totalCount % limit === 0) {
      state.pagination.totalPages += 1;
    }

    if (limit > state.all.length) {
      state.all.push(scammer);
    }
  },

  /**
   * Mutation to respond to the action when a scammer has been updated.
   *
   * @param {Object} state   The current state of the store.
   * @param {Object}  scammer The scammer that has been updated.
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
    const {
      currentPage,
      totalCount,
      limit,
      totalPages,
    } = state.pagination;

    let page = currentPage;

    if (totalPages === currentPage && currentPage !== 1 && totalCount % limit === 1) {
      page -= 1;
    }

    store.dispatch('scammer/all', (proxy) => {
      proxy.setParameter('page', page);
    });
  },
};
