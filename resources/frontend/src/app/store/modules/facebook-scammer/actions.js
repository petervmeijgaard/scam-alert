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
    .then(({ data, pagination }) => {
      const allData = {
        facebookScammers: Transformer.fetchCollection(data),
        pagination: PaginationTransformer.fetch(pagination),
      };

      commit(types.ALL, allData);
    });
};

export default {
  all,
};
