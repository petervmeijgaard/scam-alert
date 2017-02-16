import ComponentMixin from './../../../mixins/component';
import ElementMixin from './../../../mixins/element';

export default {
  /**
   * The name of the component.
   */
  name: 'toolbar-title',

  /**
   * The element name of the component.
   */
  element: 'title',

  /**
   * The mixins used to extend the component.
   */
  mixins: [
    ComponentMixin,
    ElementMixin,
  ],

  /**
   * The properties which the component can use.
   */
  props: {
    /**
     * The title being displayed.
     */
    content: {
      required: false,
      type: String,
    },
  },
};
