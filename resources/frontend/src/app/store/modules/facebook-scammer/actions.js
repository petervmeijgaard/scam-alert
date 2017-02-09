/* ============
 * Vuex Actions
 * ============
 *
 * All the actions that can be used
 * inside the store.
 */
import * as types from './mutation-types';
import Proxy from './../../../proxies/FacebookScammerProxy';
import Transformer from './../../../transformers/FacebookScammerTransformer';
import PaginationTransformer from './../../../transformers/PaginationTransformer';

const proxy = new Proxy();

const all = ({ commit }) => {
  proxy.all()
    .then((response) => {
      const data = {
        facebookScammers: Transformer.fetchCollection(response.data),
        pagination: PaginationTransformer.fetch(response.pagination),
      };

      commit(types.ALL, data);
    });
};

export default {
  all,
};
