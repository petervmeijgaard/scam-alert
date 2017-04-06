import ComponentMixin from './../../mixins/component';
import BlockMixin from './../../mixins/block';
import SlotMixin from './../../mixins/slot';

export default {
  /**
   * The name of the component
   */
  name: 'form',

  /**
   * The mixins used to extend the component.
   */
  mixins: [
    ComponentMixin,
    BlockMixin,
    SlotMixin,
  ],

  /**
   * The properties which the component can use.
   */
  props: {
    /**
     * The action if the form gets submitted.
     */
    action: {
      type: Function,
      required: true,
    },
  },
};
