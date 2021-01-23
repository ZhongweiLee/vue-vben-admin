<template>
  <PageWrapper>
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '添加',
              icon: 'ic:outline-add',
              disabled: record.type == '1',
              onClick: handleAdd.bind(null, record),
            },
            {
              label: '修改',
              icon: 'ic:outline-edit',
              onClick: handleEdit.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
    <perm-add-modal @register="registerAdd" />
    <perm-edit-modal @register="registerEdit" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { getPermissionListColumns, getPermissionFormConfig } from './permData';
  import { permissionListApi } from '/@/api/system/perm/permission';
  import { useModal } from '/@/components/Modal';

  import PermAddModal from './PermAddModal.vue';
  import PermEditModal from './PermEditModal.vue';

  export default defineComponent({
    components: {
      BasicTable,
      PageWrapper,
      TableAction,
      PermAddModal,
      PermEditModal,
    },
    setup() {
      const [registerTable] = useTable({
        title: '操作权限列表',
        api: permissionListApi,
        formConfig: getPermissionFormConfig(),
        columns: getPermissionListColumns(),
        rowKey: 'id',
        useSearchForm: true,
        isTreeTable: true,
        indentSize: 20,
        canResize: false,
        scroll: { y: 800 },
        actionColumn: {
          width: 150,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
        pagination: false,
      });

      const [registerAdd, { openModal: openModalAdd }] = useModal();
      const [registerEdit, { openModal: openModalEdit }] = useModal();

      function handleAdd(record: Recordable) {
        openModalAdd(true, { id: record.id }, true);
      }

      function handleEdit(record: Recordable) {
        openModalEdit(true, { id: record.id }, true);
      }

      return {
        registerTable,
        handleAdd,
        handleEdit,
        registerAdd,
        registerEdit,
      };
    },
  });
</script>
