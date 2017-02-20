import ComponentMixin from './../../../mixins/component';
import ElementMixin from './../../../mixins/element';
import SlotMixin from './../../../mixins/slot';
import CSSUtil from './../../../utils/css';

export default {
  /**
   * The name of the component
   */
  name: 'navigation-link',

  /**
   * The element name of the component.
   */
  element: 'link',

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
     * The route information.
     */
    route: {
      type: Object,
      required: true,
    },
  },

  /**
   * The computed properties for the component.
   */
  computed: {
    /**
     * Get the active class name in a CSS module form.
     *
     * @returns {string} The correct CSS module name.
     */
    activeClass() {
      return this.getClass(CSSUtil.variant(CSSUtil.has(this.block, this.$options.element), 'active'));
    },
  },
};
