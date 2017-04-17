<style lang="stylus">
  @import './../../../assets/stylus/imports.styl'

  .table
    background-color: palette('White')
    border-radius: .125rem
    box-shadow: $box_shadow_minimum
    width: 100%
</style>

<template>
  <table :class="classNames">
    <v-table-head>
      <v-table-row>
        <v-table-col
          variant="head"
          type="head"
          v-for="heading in headings"
          :key="heading"
          :content="heading.title"
        />
      </v-table-row>
    </v-table-head>

    <v-table-body>
      <v-table-row
        variant="body"
        v-for="item in content"
        :key="item"
      >

        <v-table-col
          variant="body"
          type="body"
          v-for="heading in headings"
          :key="heading"
        >
          <v-table-link :to="getRouteParameters(item, heading)" v-if="heading.urlTo">
            {{ getContent(item, heading) }}
          </v-table-link>
          <span v-else>
          {{ getContent(item, heading) }}
        </span>
        </v-table-col>
      </v-table-row>

      <v-table-row
        variant="body"
        v-if="content.length === 0"
      >
        <v-table-col
          variant="body"
          type="body"
          :colspan="headings.length"
          :content="emptyMessage"
        />
      </v-table-row>
    </v-table-body>
  </table>
</template>

<script>
  import BlockMixin from './../../mixins/block';
  import ComponentMixin from './../../mixins/component';
  import {
    VTableBody,
    VTableCol,
    VTableHead,
    VTableLink,
    VTableRow,
  } from './index';

  export default {
    /**
     * The name of the component
     */
    name: 'table',

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
       * The headings for the table being displayed.
       */
      headings: {
        type: Array,
        required: true,
      },

      /**
       * The message being displayed if there are no items.
       */
      emptyMessage: {
        type: String,
        required: true,
      },

      /**
       * The content being displayed inside the table.
       */
      content: {
        type: Array,
        required: false,
      },
    },

    methods: {
      getRouteParameters(item, heading) {
        const route = JSON.parse(JSON.stringify(heading.urlTo));

        Object.keys(route.params).forEach((key) => {
          route.params[key] = item[route.params[key]];
        });

        return route;
      },
      getContent(item, heading) {
        return item[heading.identifier];
      },
    },

    /**
     * The sub components for this component.
     */
    components: {
      VTableHead,
      VTableBody,
      VTableRow,
      VTableCol,
      VTableLink,
    },
  };
</script>
