<template>
  <BasicTable @register="registerTable">
    <template #form-custom> custom-slot</template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getDictTypeColumns, getDictTypeFormConfig } from './dictTypeData';

  import { dictTypeListApi } from '/@/api/system/dict/dict';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '字典列表',
        api: dictTypeListApi,
        columns: getDictTypeColumns(),
        useSearchForm: true,
        formConfig: getDictTypeFormConfig(),
        showTableSetting: true,
        showIndexColumn: false,
      });

      return {
        registerTable,
      };
    },
  });
</script>
