<template>
  <PageWrapper>
    <BasicTable @register="registerTable">
      <template #avatar="{ record }">
        <img
          :src="record.avatar == '' ? '/@/assets/images/header.jpg' : record.avatar"
          style="width: 40px; height: 40px; border-radius: 50%;"
        />
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '编辑',
              icon: 'ic:outline-edit',
              onClick: handleEdit.bind(null, record),
            },
            {
              label: '权限',
              icon: 'ic:outline-security',
              onClick: handleEdit.bind(null, record),
            },
          ]"
          :drop-down-actions="[
            {
              label: record.status == '0' ? '启用' : '停用',
              onClick: handleOpen.bind(null, record),
            },
            {
              label: '重置密码',
              onClick: handleResetPassword.bind(null, record),
            },
          ]"
          :outside="true"
        />
      </template>
      <template #toolbar>
        <a-button type="primary" @click="handleAdd"> 添加用户 </a-button>
      </template>
    </BasicTable>
    <SysUserEdit @register="registerEdit" />
    <SysUserAdd @register="registerAdd" />
    <SysUserResetPassword @register="registerResetPassword" />
  </PageWrapper>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Alert } from 'ant-design-vue';
  import { useModal } from '/@/components/Modal';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { getSysUserListColumns, getSysUserListFormConfig } from './sysuserData';
  import { changeSysUserStatuApi, sysUserListApi } from '/@/api/system/sysuser/sysuser';
  import SysUserEdit from './SysUserEdit.vue';
  import SysUserAdd from './SysUserAdd.vue';
  import SysUserResetPassword from './SysUserRestPassword.vue';

  export default defineComponent({
    components: {
      BasicTable,
      TableAction,
      PageWrapper,
      Alert,
      SysUserEdit,
      SysUserAdd,
      SysUserResetPassword,
    },
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
          width: 200,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });
      const [registerEdit, { openModal: openModalEdit }] = useModal();
      const [registerAdd, { openModal: openModalAdd }] = useModal();
      const [registerResetPassword, { openModal: openModalResetPassword }] = useModal();

      function handleEdit(record: Recordable) {
        openModalEdit(
          true,
          {
            userId: record.userId,
            username: record.username,
            email: record.email,
            phone: record.phone,
            nickname: record.nickname,
            sex: record.sex,
            postId: record.postId.toString(),
            postName: record.postName,
            deptId: record.deptId.toString(),
            deptName: record.deptName,
            remark: record.remark,
          },
          true
        );
      }

      function handleAdd() {
        openModalAdd(true, {}, true);
      }

      function handleOpen(record: Recordable) {
        var params = { userId: record.userId, status: record.status };
        changeSysUserStatuApi(params);
      }

      function handleResetPassword(record: Recordable) {
        openModalResetPassword(
          true,
          { userId: record.userId, username: record.username, nickname: record.nickname },
          true
        );
      }

      return {
        registerTable,
        handleEdit,
        handleAdd,
        handleOpen,
        handleResetPassword,
        registerEdit,
        registerAdd,
        registerResetPassword,
      };
    },
  });
</script>
