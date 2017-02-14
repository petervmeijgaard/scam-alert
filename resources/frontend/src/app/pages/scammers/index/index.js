import { mapState } from 'vuex';

import * as VLayout from './../../../layouts/base/base.vue';

export default {
  computed: {
    ...mapState('scammer', {
      scammer: state => state,
    }),
  },
  components: {
    VLayout,
  },
};
