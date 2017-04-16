/* ============
 * The Home Index page
 * ============
 *
 * The home index page.
 */

import Proxy from './../../../proxies/ScammerProxy';
import Transformer from './../../../transformers/ScammerTransformer';
import * as VLayout from './../../../layouts/base/base.vue';
import { VCard, VCardBody } from './../../../components/card';
import { VGrid } from './../../../components/grid';
import * as VRow from './../../../components/row/row.vue';
import { VCol } from './../../../components/col';

const proxy = new Proxy();

export default {
  props: {
    /**
     * The scammer identifier being used.
     */
    scammerId: {
      type: [String, Number],
      required: true,
    },
  },

  data() {
    return {
      scammer: null,
    };
  },

  watch: {
    /**
     * When the scammer identifier has been changed,
     * fetch the new data.
     */
    scammerId() {
      this.fetchScammer(this.scammerId);
    },
  },

  components: {
    VLayout,
    VCard,
    VCardBody,
    VGrid,
    VRow,
    VCol,
  },

  mounted() {
    // When the page has been mounted, fetch the scammer.
    this.fetchScammer(this.scammerId);
  },

  methods: {
    /**
     * Method used to fetch a scammer by a given identifier.
     *
     * @param {Number|String} id The scammer identifier.
     */
    fetchScammer(id) {
      proxy
        .find(id)
        .then(scammer => (this.scammer = Transformer.fetch(scammer)));
    },
  },
};
