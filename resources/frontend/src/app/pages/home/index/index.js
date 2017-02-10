/* ============
 * The Home Index page
 * ============
 *
 * The home index page.
 */

export default {
  computed: {
    limit: {
      get() {
        return this.$store.state.facebookScammer.pagination.limit;
      },
      set(value) {
        this.$store.dispatch('facebookScammer/all', {
          limit: value,
        });
      },
    },
    /**
     * Computed property which will check
     * if the previous page is disabled
     *
     * @returns {boolean} If the previous page is disabled
     */
    previousDisabled() {
      return this.$store.state.facebookScammer.pagination.currentPage <= 1;
    },

    /**
     * Computed property which will check
     * if the next page is disabled
     *
     * @returns {boolean} If the next page is disabled
     */
    nextDisabled() {
      const currentPage = this.$store.state.facebookScammer.pagination.currentPage;
      const total = this.$store.state.facebookScammer.pagination.totalPages;

      return currentPage >= total;
    },
  },

  methods: {
    /**
     * Method used to go to a different page
     *
     * @param {int} page The page number
     */
    goToPage(page) {
      const parameters = {
        limit: this.$store.state.facebookScammer.pagination.limit,
        page,
      };

      this.$store.dispatch('facebookScammer/all', parameters);
    },

    /**
     * Method used to go to the previous page
     */
    previousPage() {
      if (!this.previousDisabled) {
        this.goToPage(this.$store.state.facebookScammer.pagination.currentPage - 1);
      }
    },

    /**
     * Method used to go to the next page
     */
    nextPage() {
      if (!this.nextDisabled) {
        this.goToPage(this.$store.state.facebookScammer.pagination.currentPage + 1);
      }
    },
  },
};
