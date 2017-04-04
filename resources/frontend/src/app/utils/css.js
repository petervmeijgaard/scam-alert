/* ============
 * CSS Helper
 * ============
 *
 * A CSS helper for BEM structured styling.
 */

export default {
  /**
   * The element separator.
   */
  elementSeparator: '__',

  /**
   * The modifier separator.
   */
  modifierSeparator: '--',

  /**
   * Method which transform an element to a BEM-element
   *
   * @param {string} block   The name of the block.
   * @param {string} element The name of the element.
   *
   * @returns {string} The corrected CSS class.
   */
  has(block, element) {
    return block + this.elementSeparator + element;
  },

  /**
   * Method which transform an item to a BEM-element.
   *
   * @param {string} item    The name of the item.
   * @param {string} variant The name of the variant.
   *
   * @returns {string} The corrected CSS class.
   */
  variant(item, variant) {
    return item + this.modifierSeparator + variant;
  },

  /**
   * Method which transforms a collection of variants to a collection of BEM-elements.
   *
   * @param {string} item     The name of the item.
   * @param {Array}  variants The variants.
   *
   * @returns {Array} The corrected CSS classes.
   */
  variants(item, variants = []) {
    return variants.map(variant => this.variant(item, variant));
  },

  /**
   * Method used to compute the class names for an item with the given variants.
   *
   * @param {string} item     The name of the item.
   * @param {Array}  variants The variants.
   *
   * @returns {Array} The collection of class names.
   */
  getClassNames(item, variants = []) {
    const classNames = [item];

    return variants.length > 0 ?
      classNames.concat(this.variants(item, variants)) :
      classNames;
  },

  /**
   * Method used to compute the class names for a block.
   *
   * @param {string} block    The name of the block.
   * @param {Array}  variants The variants of the block.
   *
   * @returns {Array} The collection of class names.
   */
  getBlockClasses(block, variants = []) {
    return this.getClassNames(block, variants);
  },

  /**
   * Method used to computed the class names for a element.
   *
   * @param {string} block    The name of the block.
   * @param {string} element  The name of the element.
   * @param {Array}  variants The variants of the element.
   *
   * @returns {Array} The collection of class names.
   */
  getElementClasses(block, element, variants = []) {
    const elementClass = this.has(block, element);

    return this.getClassNames(elementClass, variants);
  },
};
