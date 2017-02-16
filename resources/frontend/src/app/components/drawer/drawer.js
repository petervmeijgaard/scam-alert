export default {
  props: {
    isActive: {
      required: false,
      type: Boolean,
      default() {
        return true;
      },
    },
  },
};
