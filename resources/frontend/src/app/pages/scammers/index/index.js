import { mapState } from 'vuex';

import * as VGrid from './../../../components/grid/grid.vue';
import * as VRow from './../../../components/row/row.vue';
import * as VCol from './../../../components/col/col.vue';
import * as VLayout from './../../../layouts/base/base.vue';
import * as VTable from './../../../components/table/table.vue';
import * as VPagination from './../../../components/pagination/pagination.vue';

export default {
  data() {
    return {
      grid: {
        variants: ['container'],
      },
      table: {
        headings: [{
          title: 'Id',
          identifier: 'id',
        }, {
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
    };
  },
  computed: {
    ...mapState('scammer', {
      scammer: state => state,
    }),
  },
  components: {
    VGrid,
    VRow,
    VCol,
    VLayout,
    VTable,
    VPagination,
  },
};
