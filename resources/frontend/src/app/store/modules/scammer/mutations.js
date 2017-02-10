import {
  ALL,
} from './mutation-types';

export default {
  [ALL](state, { scammers, pagination }) {
    state.all = scammers;
    state.pagination = pagination;
  },
};
