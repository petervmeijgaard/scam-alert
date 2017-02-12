/* ============
 * The Home Index page
 * ============
 *
 * The home index page.
 */

import Proxy from './../../../proxies/ScammerProxy';
import Transformer from './../../../transformers/ScammerTransformer';

const proxy = new Proxy();

export default {
  data() {
    return {
      scammer: null,
    };
  },
  watch: {
    '$store.state.route': function () {
      this.fetchScammer(this.$store.state.route.params.id);
    },
  },
  mounted() {
    this.fetchScammer(this.$store.state.route.params.id);
  },
  methods: {
    fetchScammer(id) {
      proxy.find(id)
        .then((scammer) => {
          this.scammer = Transformer.fetch(scammer);
        });
    },
  },
};
