/* ============
 * The Home Index page
 * ============
 *
 * The home index page.
 */

import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('scammer', {
      scammers: state => state.all,
      pagination: state => state.pagination,
    }),
  },
};
