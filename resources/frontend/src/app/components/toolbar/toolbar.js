import BlockMixin from './../../mixins/block';
import ComponentMixin from './../../mixins/component';
import SlotMixin from './../../mixins/slot';
import * as VNavIcon from './../nav-icon/nav-icon.vue';
import * as VToolbarTitle from './title/title.vue';

export default {
  /**
   * The name of the component.
   */
  name: 'toolbar',

  /**
   * The mixins used to extend the component.
   */
  mixins: [
    BlockMixin,
    ComponentMixin,
    SlotMixin,
  ],

  /**
   * The properties which the component can use.
   */
  props: {
    /**
     * The title being displayed.
     */
    title: {
      required: false,
      type: [Object, String],
    },
  },

  /**
   * The sub components for this component.
   */
  components: {
    VNavIcon,
    VToolbarTitle,
  },

  /**
   * The computed properties for the component.
   */
  computed: {
    /**
     * Checks if the component has a title.
     *
     * @returns {boolean} If the component has a title.
     */
    hasTitle() {
      return this.title || this.hasSlot('title');
    },
  },
};
