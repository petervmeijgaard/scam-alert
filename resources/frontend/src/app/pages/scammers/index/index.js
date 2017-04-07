import { mapState } from 'vuex';
import * as _ from 'lodash';

import * as VGrid from './../../../components/grid/grid.vue';
import * as VRow from './../../../components/row/row.vue';
import * as VCol from './../../../components/col/col.vue';
import * as VLayout from './../../../layouts/base/base.vue';
import * as VTable from './../../../components/table/table.vue';
import * as VPagination from './../../../components/pagination/pagination.vue';
import * as VCard from './../../../components/card/card.vue';
import * as VForm from './../../../components/form/form.vue';
import * as VTextField from './../../../components/text-field/text-field.vue';
import * as VInputGroup from './../../../components/input-group/input-group.vue';
import * as VIcon from './../../../components/icon/icon.vue';
import * as VSelect from './../../../components/select/select.vue';

export default {
  data() {
    return {
      query: '',
      table: {
        headings: [{
          title: 'Full Name',
          identifier: 'fullName',
        }, {
          title: 'First Name',
          identifier: 'firstName',
        }, {
          title: 'Last Name',
          identifier: 'lastName',
        }],
        emptyMessage: 'No scammers available',
      },
      pageNumbers: [
        5,
        10,
        15,
      ],
    };
  },
  computed: {
    ...mapState('scammer', {
      scammer: state => state,
    }),
    limit: {
      get() {
        return this.scammer.pagination.limit;
      },
      set(limit) {
        this.setLimit(limit);
      },
    },
  },
  watch: {
    query(query) {
      this.setQuery(query);
    },
  },
  components: {
    VGrid,
    VRow,
    VCol,
    VLayout,
    VTable,
    VPagination,
    VCard,
    VForm,
    VTextField,
    VIcon,
    VInputGroup,
    VSelect,
  },
  methods: {
    setPage(page) {
      this.$store.dispatch('scammer/all', (proxy) => {
        proxy.setParameter('page', page);
      });
    },
    setLimit(limit) {
      this.$store.dispatch('scammer/all', (proxy) => {
        proxy.setParameter('limit', limit)
          .removeParameter('page');
      });
    },
    setQuery: _.debounce(function (query) {
      this.$store.dispatch('scammer/all', (proxy) => {
        proxy.setParameter('q', query)
          .removeParameter('page');
      });
    }, 500),
  },
};
