import BlockMixin from './../../mixins/block';
import ComponentMixin from './../../mixins/component';

export default {
  /**
   * The name of the component
   */
  name: 'text-box',

  /**
   * The mixins used to extend the component.
   */
  mixins: [
    BlockMixin,
    ComponentMixin,
  ],

  /**
   * The properties which the component can use.
   */
  props: {
    /**
     * The value displayed in the text box.
     */
    value: {
      type: String,
      required: false,
    },

    /**
     * The placeholder text displayed in the text box.
     */
    placeholder: {
      type: String,
      required: false,
    },
  },

  /**
   * The methods which the component can use.
   */
  methods: {
    /**
     * This method will emit an event when the input has been updated.
     *
     * @param {*} value The value to be updated.
     */
    updateInput(value) {
      this.$emit('input', value);
    },
  },
};
