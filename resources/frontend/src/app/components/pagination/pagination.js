import BlockMixin from './../../mixins/block';
import ComponentMixin from './../../mixins/component';

export default {
  /**
   * The name of the component
   */
  name: 'table',

  /**
   * The mixins used to extend the component.
   */
  mixins: [
    BlockMixin,
    ComponentMixin,
  ],

  /**
   * The sub components for this component.
   */
  components: {
  },
};
