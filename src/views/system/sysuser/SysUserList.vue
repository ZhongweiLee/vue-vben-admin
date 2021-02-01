<template>
  <PageWrapper>
    <BasicTable @register="registerTable">
      <template #avatar="{ record }">
        <img
          :src="record.avatar == '' ? headerImg : record.avatar"
          :class="`${prefixCls}__header-img`"
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
              onClick: handleEditRole.bind(null, record),
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
    <SysUserEditRole @register="registerEditRole" />
  </PageWrapper>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Alert } from 'ant-design-vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { useModal } from '/@/components/Modal';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { getSysUserListColumns, getSysUserListFormConfig } from './sysuserData';
  import { changeSysUserStatuApi, sysUserListApi } from '/@/api/system/sysuser/sysuser';
  import SysUserEdit from './SysUserEdit.vue';
  import SysUserAdd from './SysUserAdd.vue';
  import SysUserResetPassword from './SysUserRestPassword.vue';
  import SysUserEditRole from './SysUserEditRole.vue';
  import { roleGetCheckBoxOptionsApi } from '/@/api/system/role/role';
  import headerImg from '/@/assets/images/header.jpg';

  export default defineComponent({
    components: {
      BasicTable,
      TableAction,
      PageWrapper,
      Alert,
      SysUserEdit,
      SysUserAdd,
      SysUserResetPassword,
      SysUserEditRole,
    },
    setup() {
      const [registerTable] = useTable({
        title: '系统用户列表',
        api: sysUserListApi,
        columns: getSysUserListColumns(),
        useSearchForm: true,
        formConfig: getSysUserListFormConfig(),
        showTableSetting: false,
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
      const [registerEditRole, { openModal: openModalEditRole }] = useModal();

      function handleEdit(record: Recordable) {
        openModalEdit(
          true,
          {
            userId: record.userId,
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

      function handleEditRole(record: Recordable) {
        roleGetCheckBoxOptionsApi().then((val) => {
          openModalEditRole(
            true,
            {
              options: val,
              userId: record.userId,
              username: record.username,
              nickname: record.nickname,
            },
            true
          );
        });
      }

      const { prefixCls } = useDesign('system-sysuser-modal');

      return {
        registerTable,
        handleEdit,
        handleAdd,
        handleOpen,
        handleResetPassword,
        handleEditRole,
        registerEdit,
        registerAdd,
        registerResetPassword,
        registerEditRole,
        headerImg,
        prefixCls,
      };
    },
  });
</script>
<style lang="less">
  @prefix-cls: ~'@{namespace}-system-sysuser-modal';
  .@{prefix-cls} {
    &__header {
      &-img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
</style>
