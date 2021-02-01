<template>
  <BasicTable @register="registerTable" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';

  import { getColumns, getFormConfig } from './hotkeyData';

  import { appHotkeyListApi } from '/@/api/biz/hotkey/hotkey';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: 'APP热搜列表',
        api: appHotkeyListApi,
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
