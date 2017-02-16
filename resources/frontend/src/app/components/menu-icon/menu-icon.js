import BlockMixin from './../../mixins/block';
import * as VMenuIconBar from './bar/bar.vue';

export default {
  /**
   * The name of the component
   */
  name: 'menu-icon',

  mixins: [
    BlockMixin,
  ],

  components: {
    VMenuIconBar,
  },
};
