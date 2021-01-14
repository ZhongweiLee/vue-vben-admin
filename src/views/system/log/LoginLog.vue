<template>
  <BasicTable @register="registerTable">
    <template #form-custom> custom-slot </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getLoginLogColumns, getLoginLogFormConfig } from './loginLogData';

  import { loginLogListApi } from '/@/api/system/log/loginLog';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '登录日志',
        api: loginLogListApi,
        columns: getLoginLogColumns(),
        useSearchForm: true,
        formConfig: getLoginLogFormConfig(),
        showTableSetting: true,
        showIndexColumn: false,
      });

      return {
        registerTable,
      };
    },
  });
</script>
