export default {

  /**
   * The properties which the component can use.
   */
  props: {
    /**
     * The variants of the component.
     */
    variants: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },

    /**
     * The variant of the component.
     */
    variant: {
      type: String,
      required: false,
    },
  },

  computed: {
    getVariants() {
      if (this.variant) {
        this.variants.push(this.variant);
      }

      return this.variants;
    },
  },

  methods: {
    /**
     * Method used to get the class name for the CSS module.
     *
     * @param {string} className The original CSS class name.
     *
     * @returns {string} The class name used as the CSS module.
     */
    getClass(className) {
      if (!this.$style) {
        return className;
      }

      return this.$style[className] || '';
    },
  },
};
