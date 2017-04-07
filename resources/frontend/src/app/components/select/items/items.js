import ComponentMixin from './../../../mixins/component';
import ElementMixin from './../../../mixins/element';
import SlotMixin from './../../../mixins/slot';

export default {
  /**
   * The name of the component.
   */
  name: 'select-items',

  /**
   * The element name of the component.
   */
  element: 'items',

  /**
   * The mixins used to extend the component.
   */
  mixins: [
    ComponentMixin,
    ElementMixin,
    SlotMixin,
  ],

  /**
   * The properties which the component can use.
   */
  props: {
    /**
     * The offset from the right.
     */
    offsetRight: {
      type: Number,
      required: true,
    },

    /**
     * The offset from the top.
     */
    offsetTop: {
      type: Number,
      required: true,
    },
  },

  /**
   * The computed properties for the component.
   */
  computed: {
    /**
     * The inline styling.
     *
     * @returns {Object} The styling.
     */
    inlineStyle() {
      return {
        right: `${this.offsetRight}px`,
        top: `${this.offsetTop}px`,
      };
    },
  },
};
