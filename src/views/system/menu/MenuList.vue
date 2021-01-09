<template>
  <BasicTable @register="registerTable">
    <template #form-custom> custom-slot</template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getMenuListColumns } from './menuData';
  import { menuListApi } from '/@/api/system/menu/menu';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '菜单列表',
        api: menuListApi,
        columns: getMenuListColumns(),
        rowKey: 'menuId',
        isTreeTable: true,
        indentSize: 20,
      });
      return {
        registerTable,
      };
    },
  });
</script>
