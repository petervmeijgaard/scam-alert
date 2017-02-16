import ComponentMixin from './../../../mixins/component';
import ElementMixin from './../../../mixins/element';

export default {
  /**
   * The name of the component.
   */
  name: 'drawer-header',

  /**
   * The element name of the component.
   */
  element: 'header',

  /**
   * The mixins used to extend the component.
   */
  mixins: [
    ComponentMixin,
    ElementMixin,
  ],
};
