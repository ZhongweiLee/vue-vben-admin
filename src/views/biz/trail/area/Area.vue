<template>
  <BasicTable @register="registerTable" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';

  import { getColumns, getFormConfig } from './areaData';

  import { trailAreaListApi } from '/@/api/biz/trail/area/area';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '目的地',
        api: trailAreaListApi,
        columns: getColumns(),
        useSearchForm: true,
        formConfig: getFormConfig(),
        showTableSetting: false,
        showIndexColumn: true,
        isTreeTable: true,
        indentSize: 20,
        rowKey: 'id',
      });

      return {
        registerTable,
      };
    },
  });
</script>
