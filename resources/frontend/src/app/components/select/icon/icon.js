import ComponentMixin from './../../../mixins/component';
import ElementMixin from './../../../mixins/element';
import SlotMixin from './../../../mixins/slot';
import * as VIcon from './../../icon/icon.vue';

export default {
  /**
   * The name of the component.
   */
  name: 'select-icon',

  /**
   * The element name of the component.
   */
  element: 'icon',

  /**
   * The mixins used to extend the component.
   */
  mixins: [
    ComponentMixin,
    ElementMixin,
    SlotMixin,
  ],

  /**
   * The sub components for this component.
   */
  components: {
    VIcon,
  },
};
