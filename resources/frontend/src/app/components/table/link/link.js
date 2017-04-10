import ComponentMixin from './../../../mixins/component';
import ElementMixin from './../../../mixins/element';
import SlotMixin from './../../../mixins/slot';

export default {
  /**
   * The name of the component
   */
  name: 'table-link',

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
     * The route.
     */
    to: {
      type: Object,
      required: true,
    },
  },
};
