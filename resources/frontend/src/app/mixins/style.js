import ComponentMixin from './component';

export default {
  mixins: [
    ComponentMixin,
  ],

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
    },

    /**
     * The CSS class of the component.
     */
    class: {
      type: String,
      required: false,
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
      return this.$style[className];
    },

    /**
     * Method used to get the element class name for the CSS module.
     *
     * @param {string} element The name of the elemen.
     *
     * @returns {string} The module class name.
     */
    elementClass(element) {
      return this.getClass(`${this.$options.name}__${element}`);
    },

    elementVariantClass(element, variants = []) {
      const classNames = [];

      classNames.push(this.elementClass(element));

      variants.forEach((variant) => {
        classNames.push(this.getClass(`${this.$options.name}__${element}--${variant}`));
      });

      return classNames;
    },
  },

  computed: {
    blockClass() {
      return this.getClass(this.$options.name);
    },
  },
};
