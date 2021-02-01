<template>
  <BasicTable @register="registerTable" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getColumns, getFormConfig } from './appLogData';

  import { appLogListApi } from '/@/api/biz/applog/applog';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: 'APP崩溃日志',
        api: appLogListApi,
        columns: getColumns(),
        useSearchForm: true,
        formConfig: getFormConfig(),
        showTableSetting: false,
        showIndexColumn: false,
        ellipsis: false,
        canResize: false,
      });

      return {
        registerTable,
      };
    },
  });
</script>
