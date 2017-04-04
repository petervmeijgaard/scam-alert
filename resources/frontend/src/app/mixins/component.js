export default {
  /**
   * The name of the component.
   */
  name: 'custom-component',

  methods: {
    /**
     * Method used to find the variants of an element.
     *
     * @param {String} element The element to fetch the variants for.
     *
     * @returns {Array} The variants.
     */
    getVariantsFor(element) {
      if (this[element] && this[element].variants) {
        return this[element].variants;
      }

      return [];
    },

    /**
     * Method used to find the content of an element.
     *
     * @param {String|Object} element The element to fetch the content for.
     *
     * @returns {String|undefined} The variants.
     */
    getContent(element) {
      if (typeof this[element] === 'string') {
        return this[element];
      }

      if (typeof this[element] === 'object' && this[element].content) {
        return this[element].content;
      }

      return undefined;
    },

    /**
     * Checks if the component has an item.
     *
     * @param {String} item The item.
     *
     * @returns {boolean} If the component has the item.
     */
    has(item) {
      return this[item] || this.hasSlot(item);
    },
  },
};
