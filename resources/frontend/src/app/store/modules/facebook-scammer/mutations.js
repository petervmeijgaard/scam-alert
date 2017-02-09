import {
  ALL,
} from './mutation-types';

export default {
  [ALL](state, { facebookScammers, pagination }) {
    state.all = facebookScammers;
    state.pagination = pagination;
  },
};
