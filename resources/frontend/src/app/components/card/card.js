import ComponentMixin from './../../mixins/component';
import BlockMixin from './../../mixins/block';
import SlotMixin from './../../mixins/slot';
import * as VCardBody from './body/body.vue';

export default {
  /**
   * The name of the component
   */
  name: 'card',

  /**
   * The mixins used to extend the component.
   */
  mixins: [
    ComponentMixin,
    BlockMixin,
    SlotMixin,
  ],

  /**
   * The computed properties for the component.
   */
  computed: {
    /**
     * Checks if the component has a body.
     *
     * @returns {boolean} If the component has a body.
     */
    hasBody() {
      return this.has('body');
    },
  },

  /**
   * The sub components for this component.
   */
  components: {
    VCardBody,
  },
};
