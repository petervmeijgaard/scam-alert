export default {
  /**
   * The properties which the component can use.
   */
  props: {
    /**
     * The content being displayed.
     */
    content: {
      type: [String, Number],
      required: false,
    },
  },

  methods: {
    hasSlot(slotName = 'default') {
      return !!this.$slots[slotName];
    },
  },
};
