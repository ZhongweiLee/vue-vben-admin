<template>
  <BasicTable @register="registerTable">
    <template #form-custom> custom-slot </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getBasicColumns, getFormConfig } from './operaLogData';

  import { operaLogListApi } from '/@/api/system/log/operaLog';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '操作日志',
        api: operaLogListApi,
        columns: getBasicColumns(),
        useSearchForm: true,
        formConfig: getFormConfig(),
        showTableSetting: true,
        showIndexColumn: false,
      });

      return {
        registerTable,
      };
    },
  });
</script>
