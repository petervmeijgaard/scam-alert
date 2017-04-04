import ComponentMixin from './../../../mixins/component';
import ElementMixin from './../../../mixins/element';
import SlotMixin from './../../../mixins/slot';

export default {
  /**
   * The name of the component
   */
  name: 'table-col',

  /**
   * The element name of the component.
   */
  element: 'col',

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
     * The type of the column.
     */
    type: {
      type: String,
      required: true,
    },
  },

  /**
   * Render method which is used to render the component.
   *
   * @param {function} createElement This method will create a new element.
   *
   * @returns {VNode} A virtual Vue element.
   */
  render(createElement) {
    return createElement(
      this.type === 'head' ? 'th' : 'td',
      {
        class: this.classNames,
      },
      this.$slots.default || this.content,
    );
  },
};
