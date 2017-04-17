<style lang="stylus">
  @import './../../../assets/stylus/imports.styl'

  .pagination
    align-items: center
    background-color: palette('White')
    border-radius: .125rem
    box-shadow: $box_shadow_minimum
    display: inline-flex
    flex-direction: row
    padding: 1rem
    width: 100%
    +variant('inline')
      display: inline-flex
    +variant('small')
      box-shadow: none
      background-color: none
      padding: 0
      border-radius: 0
</style>

<template>
  <div :class="classNames">

    <v-pagination-item
      @click="previousPage"
      :is-enabled="previousEnabled"
      variant="icon"
    >
      <v-icon>navigate_before</v-icon>
    </v-pagination-item>

    <v-pagination-item
      v-for="page in pagination.totalPages"
      :key="page"
      :is-active="isActive(page)"
      @click="goToPage(page)"
    >
      {{ page }}
    </v-pagination-item>

    <v-pagination-item
      @click="nextPage"
      :is-enabled="nextEnabled"
      variant="icon"
    >
      <v-icon>navigate_next</v-icon>
    </v-pagination-item>

  </div>
</template>

<script>
  import BlockMixin from './../../mixins/block';
  import ComponentMixin from './../../mixins/component';
  import { VPaginationItem } from './index';
  import { VIcon } from './../icon';

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
      switchPageFunction: {
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
        this.switchPageFunction(page);
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
</script>
