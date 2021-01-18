<template>
  <PageWrapper>
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '编辑',
              icon: 'ic:outline-edit',
              onClick: handleEdit.bind(null, record),
            },
            {
              label: '删除',
              icon: 'ic:outline-delete',
              onClick: handleDelete.bind(null, record),
              disabled: record.status != '1',
            },
          ]"
          :outside="true"
        />
      </template>

      <template #admin="{ record }">
        {{ record.admin ? '是' : '否' }}
      </template>
      <template #toolbar>
        <a-button type="primary" @click="handleAdd"> 添加角色 </a-button>
      </template>
    </BasicTable>
    <RoleAdd @register="registerAdd" />
    <RoleEditDrawer @register="registerEditDrawer" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useDrawer } from '/@/components/Drawer';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';

  import { getRoleListColumns, getRoleListFormConfig } from './roleData';
  import { roleDeleteApi, roleListApi } from '/@/api/system/role/role';

  import RoleAdd from './RoleAdd.vue';
  import RoleEditDrawer from './RoleEditDrawer.vue';
  import { useMessage } from '/@/hooks/web/useMessage';

  export default defineComponent({
    components: { BasicTable, TableAction, RoleAdd, RoleEditDrawer, PageWrapper },
    setup() {
      const [registerTable] = useTable({
        title: '角色列表',
        api: roleListApi,
        columns: getRoleListColumns(),
        useSearchForm: true,
        formConfig: getRoleListFormConfig(),
        showTableSetting: false,
        showIndexColumn: false,
        actionColumn: {
          width: 160,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      const [registerAdd, { openDrawer: openAddDrawer }] = useDrawer();

      function handleAdd() {
        console.log('click add');
        openAddDrawer(true, {});
      }

      const [registerEditDrawer, { openDrawer: openEditDrawer }] = useDrawer();
      function handleEdit(record: Recordable) {
        openEditDrawer(true, { roleId: record.roleId }, true);
      }

      function handleDelete(record: Recordable) {
        roleDeleteApi(record.roleId).then(() => {
          useMessage().createMessage.info('删除成功');
        });
      }

      return {
        registerTable,
        handleAdd,
        openAddDrawer,
        registerAdd,
        openEditDrawer,
        handleEdit,
        handleDelete,
        registerEditDrawer,
      };
    },
  });
</script>
