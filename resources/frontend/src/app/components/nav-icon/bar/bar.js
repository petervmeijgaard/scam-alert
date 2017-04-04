import ComponentMixin from './../../../mixins/component';
import ElementMixin from './../../../mixins/element';

export default {
  /**
   * The name of the component.
   */
  name: 'nav-icon-bar',

  /**
   * The element name of the component.
   */
  element: 'bar',

  /**
   * The mixins used to extend the component.
   */
  mixins: [
    ComponentMixin,
    ElementMixin,
  ],
};
