<template>
  <PageWrapper>
    <BasicTable @register="registerTable">
      <template #admin="{ record }">
        {{ record.admin ? '是' : '否' }}
      </template>
      <template #toolbar>
        <a-button type="primary" @click="handleAdd"> 添加角色 </a-button>
      </template>
    </BasicTable>
    <RoleAdd @register="registerAdd" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useDrawer } from '/@/components/Drawer';
  import { BasicTable, useTable } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';

  import { getRoleListColumns, getRoleListFormConfig } from './roleData';
  import { roleListApi } from '/@/api/system/role/role';

  import RoleAdd from './RoleAdd.vue';

  export default defineComponent({
    components: { BasicTable, RoleAdd, PageWrapper },
    setup() {
      const [registerTable] = useTable({
        title: '角色列表',
        api: roleListApi,
        columns: getRoleListColumns(),
        useSearchForm: true,
        formConfig: getRoleListFormConfig(),
        showTableSetting: false,
        showIndexColumn: false,
      });

      const [registerAdd, { openDrawer: openAddDrawer }] = useDrawer();

      function handleAdd() {
        console.log('click add');
        openAddDrawer(true, {});
      }

      return {
        registerTable,
        handleAdd,
        openAddDrawer,
        registerAdd,
      };
    },
  });
</script>
