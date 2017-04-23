import { mapState } from 'vuex';
import * as _ from 'lodash';

import { VLayout } from '@/layouts/base';
import { VGrid } from '@/components/grid';
import { VRow } from '@/components/row';
import { VCol } from '@/components/col';
import {
  VTable,
  VTableHead,
  VTableHeader,
  VTableRow,
  VTableBody,
  VTableCell,
} from '@/components/table';
import { VPagination } from '@/components/pagination';
import { VCard, VCardBody } from '@/components/card';
import { VForm } from '@/components/form';
import { VTextField } from '@/components/text-field';
import { VInputGroup } from '@/components/input-group';
import { VIcon } from '@/components/icon';
import { VSelect } from '@/components/select';

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
    VTableHead,
    VTableHeader,
    VTableRow,
    VTableBody,
    VTableCell,
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
    scammerUrl(id) {
      return {
        name: 'scammers.show',
        params: { scammerId: id },
      };
    },
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
