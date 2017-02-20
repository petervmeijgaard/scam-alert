export default {
  /**
   * The properties which the component can use.
   */
  props: {
    /**
     * The title being displayed.
     */
    content: {
      type: String,
      required: false,
    },
  },

  methods: {
    hasSlot(slotName = 'default') {
      return !!this.$slots[slotName];
    },
  },
};
