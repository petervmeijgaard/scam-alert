import { mapState } from 'vuex';
import * as _ from 'lodash';

import * as VGrid from './../../../components/grid/grid.vue';
import * as VRow from './../../../components/row/row.vue';
import { VCol } from './../../../components/col';
import * as VLayout from './../../../layouts/base/base.vue';
import * as VTable from './../../../components/table/table.vue';
import * as VPagination from './../../../components/pagination/pagination.vue';
import { VCard, VCardBody } from './../../../components/card';
import { VForm } from './../../../components/form';
import * as VTextField from './../../../components/text-field/text-field.vue';
import * as VInputGroup from './../../../components/input-group/input-group.vue';
import * as VIcon from './../../../components/icon/icon.vue';
import * as VSelect from './../../../components/select/select.vue';

export default {
  data() {
    return {
      query: null,
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
    table() {
      return {
        headings: [{
          title: this.$t('scammer.full_name'),
          urlTo: {
            name: 'scammers.show',
            params: {
              scammerId: 'id',
            },
          },
          identifier: 'fullName',
        }, {
          title: this.$t('scammer.first_name'),
          identifier: 'firstName',
        }, {
          title: this.$t('scammer.last_name'),
          identifier: 'lastName',
        }],
        emptyMessage: this.$t('overall.not_found', [this.$t('scammer.plural')]),
      };
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
    VCardBody,
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
