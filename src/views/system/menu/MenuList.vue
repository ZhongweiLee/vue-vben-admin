<template>
  <BasicTable @register="registerTable">
    <template #metaTitle="{ record }">
      <span v-if="record.parentId != 0">{{ record.parentName }}</span>
      {{ record.parentId == 0 ? record.metaTitle : '└──' + record.metaTitle }}
    </template>
    <template #metaIcon="{ record }">
      <Icon :icon="record.metaIcon" :size="30" />
    </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import Icon from '/@/components/Icon/index';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getMenuFormConfig, getMenuListColumns } from './menuData';
  import { menuListApi } from '/@/api/system/menu/menu';

  export default defineComponent({
    components: { BasicTable, Icon },
    setup() {
      const [registerTable] = useTable({
        title: '菜单列表',
        api: menuListApi,
        formConfig: getMenuFormConfig(),
        columns: getMenuListColumns(),
        rowKey: 'id',
        useSearchForm: true,
        isTreeTable: true,
        indentSize: 20,
        canResize: false,
        scroll: { y: 800 },
      });
      return {
        registerTable,
      };
    },
  });
</script>
