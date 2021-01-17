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
      <template #toolbar>
        <a-button type="primary" @click="handleAdd"> 添加菜单 </a-button>
      </template>
    </BasicTable>
    <MenuAddDrawer @register="registerMenuAddDrawer" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useDrawer } from '/@/components/Drawer';
  import Icon from '/@/components/Icon/index';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getMenuFormConfig, getMenuListColumns } from './menuData';
  import { menuListApi } from '/@/api/system/menu/menu';
  import MenuAddDrawer from './MenuAddDrawer.vue';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    components: { BasicTable, Icon, PageWrapper, MenuAddDrawer },
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

      const [registerMenuAddDrawer, { openDrawer: openAddDrawer }] = useDrawer();

      function handleAdd() {
        console.log('click add');
        openAddDrawer(true, { data: 'content', info: 'Info' });
      }

      return {
        registerTable,
        registerMenuAddDrawer,
        openAddDrawer,
        handleAdd,
      };
    },
  });
</script>
