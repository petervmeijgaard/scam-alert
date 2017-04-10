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
   * @returns {XML} The XML.
   */
  render() {
    const content = this.$slots.default || this.content;

    return this.type === 'head' ?
      <th class={this.classNames}>{content}</th> :
      <td class={this.classNames}>{content}</td>;
  },
};
