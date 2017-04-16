/* ============
 * The Home Index page
 * ============
 *
 * The home index page.
 */

import * as VLayout from './../../../layouts/base/base.vue';
import { VCard, VCardBody } from './../../../components/card';
import * as VGrid from './../../../components/grid/grid.vue';
import * as VRow from './../../../components/row/row.vue';
import { VCol } from './../../../components/col';

export default {
  name: 'home-index-page',

  components: {
    VLayout,
    VCard,
    VCardBody,
    VGrid,
    VRow,
    VCol,
  },
};
