import BlockMixin from './../../mixins/block';
import ComponentMixin from './../../mixins/component';
import Vue from 'vue';
import * as VSelectIcon from './icon/icon.vue';
import * as VSelectSelected from './selected/selected.vue';
import * as VSelectLabel from './label/label.vue';
import * as VSelectItems from './items/items.vue';
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

  data() {
    return {
      offsetRight: 0,
      offsetTop: 0,
      items: [5, 10, 15, 20],
      selected: null,
      isActive: false,
    };
  },
  methods: {
    activate(item) {
      this.selected = item;
      this.isActive = false;
    },
    enable() {
      this.isActive = true;
      Vue.nextTick(() => {
        this.calculateOffset();
      });
    },
    calculateOffset() {
      this.calculateOffsetRight();
      this.calculateOffsetTop();
    },
    computeOffsetTop() {
      const index = this.items.indexOf(this.selected);
      let offset = -20;

      if (index > 0) {
        offset = -20 - (index * 48);
      }

      return offset;
    },
    calculateOffsetRight() {
      const selectedWidth = this.$refs.selected.$el.offsetWidth + 8;
      const itemsWidth = this.$refs.items.$el.offsetWidth - 32;

      this.offsetRight = selectedWidth - itemsWidth;
    },
    calculateOffsetTop() {
      this.offsetTop = this.computeOffsetTop();
    },
  },

  /**
   * The sub components for this component.
   */
  components: {
    VSelectIcon,
    VSelectSelected,
    VSelectLabel,
    VSelectItems,
    VSelectItem,
  },
};
