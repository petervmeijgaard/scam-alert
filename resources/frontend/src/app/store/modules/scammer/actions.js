/* ============
 * Vuex Actions
 * ============
 *
 * All the actions that can be used
 * inside the store.
 */
import * as types from './mutation-types';
import Proxy from './../../../proxies/ScammerProxy';
import Transformer from './../../../transformers/ScammerTransformer';
import PaginationTransformer from './../../../transformers/PaginationTransformer';

const proxy = new Proxy();

const all = ({ commit }, parameters = {}) => {
  proxy.all(parameters)
    .then((response) => {
      const data = {
        scammers: Transformer.fetchCollection(response.data),
        pagination: PaginationTransformer.fetch(response.pagination),
      };

      commit(types.ALL, data);
    });
};

export default {
  all,
};
