<template>
  <PageWrapper>
    <BasicTable @register="registerTable">
      <template #metaTitle="{ record }">
        <span v-if="record.parentId != 0">{{ record.parentName }}</span>
        {{ record.parentId == 0 ? record.metaTitle : '└──' + record.metaTitle }}
      </template>
      <template #metaIcon="{ record }">
        <Icon :icon="record.metaIcon" :size="30" />
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            { label: '编辑', icon: 'ic:outline-edit', onClick: handleEdit.bind(null, record) },
          ]"
          :outside="true"
        />
      </template>
      <template #toolbar>
        <a-button type="primary" @click="handleAdd"> 添加菜单 </a-button>
      </template>
    </BasicTable>
    <MenuAddDrawer @register="registerMenuAddDrawer" />
    <MenuEditDrawer @register="registerMenuEditDrawer" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useDrawer } from '/@/components/Drawer';
  import Icon from '/@/components/Icon/index';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { getMenuFormConfig, getMenuListColumns } from './menuData';
  import { menuListApi } from '/@/api/system/menu/menu';
  import MenuAddDrawer from './MenuAddDrawer.vue';
  import MenuEditDrawer from './MenuEditDrawer.vue';

  export default defineComponent({
    components: {
      BasicTable,
      TableAction,
      Icon,
      PageWrapper,
      MenuAddDrawer,
      MenuEditDrawer,
    },
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
        actionColumn: {
          width: 100,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      const [registerMenuAddDrawer, { openDrawer: openAddDrawer }] = useDrawer();
      const [registerMenuEditDrawer, { openDrawer: openEditDrawer }] = useDrawer();

      function handleAdd() {
        //openAddDrawer(true, { data: 'content', info: 'Info' });
        openAddDrawer(true, {});
      }
      function handleEdit(record: Recordable) {
        openEditDrawer(
          true,
          {
            id: record.id,
          },
          true
        );
      }

      return {
        registerTable,
        handleAdd,
        handleEdit,
        openAddDrawer,
        openEditDrawer,
        registerMenuAddDrawer,
        registerMenuEditDrawer,
      };
    },
  });
</script>
