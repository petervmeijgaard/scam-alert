import BlockMixin from './../../mixins/block';
import ComponentMixin from './../../mixins/component';
import SlotMixin from './../../mixins/slot';

export default {
  /**
   * The name of the component
   */
  name: 'input-group',

  /**
   * The mixins used to extend the component.
   */
  mixins: [
    BlockMixin,
    ComponentMixin,
    SlotMixin,
  ],
};
