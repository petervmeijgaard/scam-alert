import BlockMixin from './../../mixins/block';
import ComponentMixin from './../../mixins/component';
import * as VNavIconBar from './bar/bar.vue';

export default {
  /**
   * The name of the component
   */
  name: 'nav-icon',

  /**
   * The mixins used to extend the component.
   */
  mixins: [
    BlockMixin,
    ComponentMixin,
  ],

  /**
   * The properties which the component can use.
   */
  props: {
    /**
     * The bar being displayed.
     */
    bar: {
      required: false,
      type: Object,
    },
  },

  /**
   * The sub components for this component.
   */
  components: {
    VNavIconBar,
  },
};
