import BlockMixin from './../../mixins/block';
import ComponentMixin from './../../mixins/component';
import Vue from 'vue';
import * as VSelectIcon from './icon/icon.vue';
import * as VSelectSelected from './selected/selected.vue';
import * as VSelectLabel from './label/label.vue';
import * as VSelectList from './list/list.vue';
import * as VSelectItem from './item/item.vue';

export default {
  /**
   * The name of the component
   */
  name: 'select',

  /**
   * The mixins used to extend the component.
   */
  mixins: [
    BlockMixin,
    ComponentMixin,
  ],

  props: {
    /**
     * The value selected.
     */
    value: {
      type: [String, Number, Object, Boolean],
      required: false,
    },

    /**
     * The items that can be selected.
     */
    items: {
      type: Array,
      required: true,
    },

    /**
     * The identifier required to select an object.
     */
    content: {
      type: String,
      required: false,
    },
  },

  /**
   * The data of the component
   *
   * @returns {Object} The data.
   */
  data() {
    return {
      offsetRight: 0,
      offsetTop: 0,
      selected: null,
      isActive: false,
    };
  },

  computed: {
    /**
     * Get the selected content.
     *
     * @returns {String | Number | boolean} The correct content.
     */
    selectedContent() {
      if (!this.content) {
        return this.selected || this.items[0];
      }

      if (!this.selected) {
        return this.items[0][this.content];
      }

      return this.selected[this.content];
    },
  },

  methods: {
    /**
     * Method used to fetch the content from an item.
     *
     * @param {String | Number | boolean | Object} item The given item.
     *
     * @returns {String | Number | boolean} The correct content.
     */
    getContentFrom(item) {
      return this.content ?
        item[this.content] :
        item;
    },

    /**
     * This method is fired when an item has been selected.
     *
     * @param {String | Number | Object | boolean} item The item to be activated.
     */
    select(item) {
      this.selected = item;
      this.$emit('input', item);
      this.isActive = false;
    },

    /**
     * Will enable the list of items.
     */
    enable() {
      this.isActive = true;
      Vue.nextTick(() => {
        this.calculateOffset();
      });
    },

    /**
     * Method to check if the item is selected.
     *
     * @param {String | Number | Object | boolean } item The given item
     *
     * @returns {boolean} If the item is selected.
     */
    isSelected(item) {
      return item === this.selected;
    },

    /**
     * Will calculate the offset for the top and right.
     */
    calculateOffset() {
      this.calculateOffsetRight();
      this.calculateOffsetTop();
    },

    /**
     * This method will compute the offset on the top of the list.
     */
    calculateOffsetTop() {
      const index = this.items.indexOf(this.selected);
      let offset = -20;

      if (index > 0) {
        offset = -20 - (index * 48);
      }

      this.offsetTop = offset;
    },

    /**
     * This method will compute the offset on the right of the list.
     */
    calculateOffsetRight() {
      const selectedWidth = this.$refs.selected.$el.offsetWidth + 8;
      const itemsWidth = this.$refs.items.$el.offsetWidth - 32;

      this.offsetRight = selectedWidth - itemsWidth;
    },
  },

  /**
   * When the component has been mounted,
   * this method will be fired.
   */
  mounted() {
    this.selected = this.value;
  },

  /**
   * The sub components for this component.
   */
  components: {
    VSelectIcon,
    VSelectSelected,
    VSelectLabel,
    VSelectList,
    VSelectItem,
  },
};
