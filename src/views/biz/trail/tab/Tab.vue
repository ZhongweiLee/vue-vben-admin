<template>
  <BasicTable @register="registerTable" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';

  import { getColumns, getFormConfig } from './tabData';

  import { trailTabListApi } from '/@/api/biz/trail/tab/tab';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '线路分类',
        api: trailTabListApi,
        columns: getColumns(),
        useSearchForm: true,
        formConfig: getFormConfig(),
        showTableSetting: false,
        showIndexColumn: false,
        ellipsis: true,
        canResize: false,
      });

      return {
        registerTable,
      };
    },
  });
</script>
