import CSSUtil from '@/utils/css';
import StyleMixin from './style';

export default {
  /**
   * The name of the element.
   */
  element: 'element',

  /**
   * The mixins used for the mixin.
   */
  mixins: [
    StyleMixin,
  ],

  /**
   * The computed properties.
   */
  computed: {
    /**
     * Get the block name.
     */
    block() {
      return this.$parent.block || this.$parent.$options.name;
    },

    /**
     * Get the CSS module class names.
     *
     * @returns {Array} The CSS module class names.
     */
    classNames() {
      return CSSUtil
        .getElementClasses(this.block, this.$options.element, this.getVariants)
        .map(className => this.getClass(className));
    },

    /**
     * Get the element class name
     *
     * @returns {String} The class name of the element.
     */
    getElementClassName() {
      return CSSUtil.has(this.block, this.$options.element);
    },
  },
};
