import BlockMixin from './../../mixins/block';
import ComponentMixin from './../../mixins/component';

export default {
  /**
   * The name of the component
   */
  name: 'overlay',

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
     * Whether the overlay is active.
     */
    isActive: {
      type: Boolean,
      required: false,
      default() {
        return true;
      },
    },
  },
};
