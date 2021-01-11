<template>
  <PageWrapper title="modal组件使用示例">
    <BasicTable @register="registerTable">
      <template #admin="{ record }"> {{ record.status == '0' ? '有效' : '停用' }}</template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '编辑',
              icon: 'ic:outline-edit',
              onClick: handleEdit.bind(null, record),
            },
          ]"
          :dropDownActions="[
            {
              label: record.status == '0' ? '启用' : '停用',
              onClick: handleOpen.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
    <SysUserEdit @register="registerEdit" />
  </PageWrapper>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Alert } from 'ant-design-vue';
  import { useModal } from '/@/components/Modal';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { getSysUserListColumns, getSysUserListFormConfig } from './sysuserData';
  import { sysUserListApi } from '/@/api/system/sysuser/sysuser';
  import SysUserEdit from './SysUserEdit.vue';

  export default defineComponent({
    components: { BasicTable, TableAction, PageWrapper, Alert, SysUserEdit },
    setup() {
      const [registerTable] = useTable({
        title: '系统用户列表',
        api: sysUserListApi,
        columns: getSysUserListColumns(),
        useSearchForm: true,
        formConfig: getSysUserListFormConfig(),
        showTableSetting: true,
        showIndexColumn: false,
        actionColumn: {
          width: 160,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });
      const [registerEdit, { openModal: openModalEdit }] = useModal();

      function handleEdit(record: Recordable) {
        openModalEdit(
          true,
          {
            userId: record.userId,
            username: record.username,
            email: record.email,
            phone: record.phone,
            nickName: record.nickName,
          },
          true
        );
      }
      function handleOpen(record: Recordable) {
        console.log('点击了启用', record);
      }

      return {
        registerTable,
        handleEdit,
        handleOpen,
        registerEdit,
      };
    },
  });
</script>
