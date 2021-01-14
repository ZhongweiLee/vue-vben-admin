<template>
  <BasicTable @register="registerTable">
    <template #form-custom> custom-slot </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getDeptListColumns } from './deptData';
  import { deptListApi } from '/@/api/system/dept/dept';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '部门列表',
        api: deptListApi,
        columns: getDeptListColumns(),
        rowKey: 'deptId',
        isTreeTable: true,
        indentSize: 20,
      });
      return {
        registerTable,
      };
    },
  });
</script>
