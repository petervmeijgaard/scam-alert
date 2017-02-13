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
      scammer: state => state,
    }),
  },
};
