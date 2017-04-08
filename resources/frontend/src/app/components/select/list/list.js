import ComponentMixin from './../../../mixins/component';
import ElementMixin from './../../../mixins/element';
import SlotMixin from './../../../mixins/slot';

export default {
  /**
   * The name of the component.
   */
  name: 'select-list',

  /**
   * The element name of the component.
   */
  element: 'list',

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
     * The selected component.
     */
    selectedComponent: {
      type: Object,
      required: true,
    },

    /**
     * The index of the selected item.
     */
    selectedIndex: {
      type: Number,
      required: true,
    },
  },

  /**
   * The data of the component
   *
   * @returns {Object} The data.
   */
  data() {
    return {
      offsetRight: 0,
    };
  },

  /**
   * The computed properties for the component.
   */
  computed: {
    /**
     * Computed property for the offset on the top.
     *
     * @returns {number} The offset on the top.
     */
    offsetTop() {
      let offset = -20;

      if (this.selectedIndex > 0) {
        offset = -20 - (this.selectedIndex * 48);
      }

      return offset;
    },

    /**
     * The inline styling.
     *
     * @returns {Object} The styling.
     */
    inlineStyle() {
      return {
        right: `${this.offsetRight / 16}rem`,
        top: `${this.offsetTop / 16}rem`,
      };
    },
  },

  /**
   * The methods which the component can use.
   */
  methods: {
    /**
     * This method will compute the offset on the right of the list.
     */
    calculateOffsetRight() {
      const selectedWidth = this.selectedComponent.$el.offsetWidth + 8;
      const itemsWidth = this.$el.offsetWidth - 32;

      this.offsetRight = selectedWidth - itemsWidth;
    },
  },

  /**
   * When the component has been mounted,
   * this method will be fired.
   */
  mounted() {
    this.calculateOffsetRight();
  },
};
