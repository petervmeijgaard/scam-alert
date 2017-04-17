import { mapState } from 'vuex';
import * as _ from 'lodash';

import { VLayout } from 'layouts/base';
import { VGrid } from 'components/grid';
import { VRow } from 'components/row';
import { VCol } from 'components/col';
import { VTable } from 'components/table';
import { VPagination } from 'components/pagination';
import { VCard, VCardBody } from 'components/card';
import { VForm } from 'components/form';
import { VTextField } from 'components/text-field';
import { VInputGroup } from 'components/input-group';
import { VIcon } from 'components/icon';
import { VSelect } from 'components/select';

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
