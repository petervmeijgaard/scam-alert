import BlockMixin from './../../mixins/block';
import ComponentMixin from './../../mixins/component';
import * as VPaginationItem from './item/item.vue';
import * as VIcon from './../icon/icon.vue';

export default {
  /**
   * The name of the component
   */
  name: 'pagination',

  /**
   * The mixins used to extend the component.
   */
  mixins: [
    BlockMixin,
    ComponentMixin,
  ],

  /**
   * The properties which the component can use.
   */
  props: {
    /**
     * The pagination being used.
     */
    pagination: {
      type: Object,
      required: true,
    },

    /**
     * The function used to switch the page.
     */
    switchFunction: {
      type: Function,
      required: true,
    },
  },

  computed: {
    /**
     * Computed property which will check
     * if the previous page is disabled.
     *
     * @returns {boolean} If the previous page is disabled.
     */
    previousEnabled() {
      return this.pagination.currentPage > 1;
    },

    /**
     * Computed property which will check
     * if the next page is disabled.
     *
     * @returns {boolean} If the next page is disabled.
     */
    nextEnabled() {
      return this.pagination.currentPage < this.pagination.totalPages;
    },
  },

  /**
   * The methods which the component can use.
   */
  methods: {
    /**
     * Checks which page is the current one.
     *
     * @param {Number} page The page number.
     *
     * @returns {boolean} If the page is active.
     */
    isActive(page) {
      return page === this.pagination.currentPage;
    },

    /**
     * Method used to switch the page
     *
     * @param {Number} page The page number.
     */
    goToPage(page) {
      this.switchFunction({
        page,
        limit: this.pagination.limit,
      });
    },

    /**
     * Method used to go to the previous page.
     */
    previousPage() {
      if (this.previousEnabled) {
        this.goToPage(this.pagination.currentPage - 1);
      }
    },

    /**
     * Method used to go to the next page.
     */
    nextPage() {
      if (this.nextEnabled) {
        this.goToPage(this.pagination.currentPage + 1);
      }
    },
  },

  /**
   * The sub components for this component.
   */
  components: {
    VPaginationItem,
    VIcon,
  },
};
