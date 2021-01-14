<template>
  <BasicTable @register="registerTable">
    <template #admin="{ record }">
      {{ record.admin ? '是' : '否' }}
    </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getRoleListColumns, getRoleListFormConfig } from './roleData';
  import { roleListApi } from '/@/api/system/role/role';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '角色列表',
        api: roleListApi,
        columns: getRoleListColumns(),
        useSearchForm: true,
        formConfig: getRoleListFormConfig(),
        showTableSetting: true,
        showIndexColumn: false,
      });

      return {
        registerTable,
      };
    },
  });
</script>
