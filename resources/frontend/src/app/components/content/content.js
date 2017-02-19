import ComponentMixin from './../../mixins/component';
import BlockMixin from './../../mixins/block';
import SlotMixin from './../../mixins/slot';

export default {
  /**
   * The name of the component
   */
  name: 'content',

  /**
   * The mixins used to extend the component.
   */
  mixins: [
    ComponentMixin,
    BlockMixin,
    SlotMixin,
  ],
};
