import BlockMixin from './../../mixins/block';
import * as VNavIconBar from './bar/bar.vue';

export default {
  /**
   * The name of the component
   */
  name: 'nav-icon',

  /**
   * The mixins used to expand the component.
   */
  mixins: [
    BlockMixin,
  ],

  /**
   * The sub components for this component.
   */
  components: {
    VNavIconBar,
  },
};
