/* ============
 * Scammer Actions
 * ============
 *
 * The actions available for the scammer module.
 */

import * as types from './mutation-types';
import Proxy from '@/proxies/ScammerProxy';
import Transformer from '@/transformers/ScammerTransformer';
import PaginationTransformer from '@/transformers/PaginationTransformer';

const proxy = new Proxy();

/**
 * Action fired when all scammers will be fetched.
 *
 * @param {function} commit Commit function to update the store.
 * @param {function} fn     Callback to edit the parameters on the proxy.
 */
const all = ({ commit }, fn = null) => {
  if (typeof fn === 'function') {
    fn(proxy);
  }

  proxy.all()
    .then((response) => {
      const data = {
        scammers: Transformer.fetchCollection(response.data),
        pagination: PaginationTransformer.fetch(response.pagination),
      };

      commit(types.ALL, data);
    });
};

/**
 * Action fired when a scammer has been created.
 *
 * @param {function} commit  Commit function to update the store.
 * @param {Object}   scammer The scammer that has been created.
 */
const created = ({ commit }, scammer) => {
  commit(types.CREATED, Transformer.fetch(scammer));
};

/**
 * Action fired when a scammer has been updated.
 *
 * @param {function} commit  Commit function to update the store.
 * @param {Object}   scammer The scammer that has been updated.
 */
const updated = ({ commit }, scammer) => {
  commit(types.UPDATED, Transformer.fetch(scammer));
};

/**
 * Action fired when a scammer has been deleted.
 *
 * @param {function} commit  Commit function to update the store.
 * @param {Object}   scammer The scammer that has been deleted.
 */
const deleted = ({ commit }, scammer) => {
  commit(types.DELETED, Transformer.fetch(scammer));
};

export default {
  all,
  created,
  updated,
  deleted,
};
