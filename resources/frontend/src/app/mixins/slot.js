export default {
  methods: {
    hasSlot(slotName = 'default') {
      return !!this.$slots[slotName];
    },
  },
};
