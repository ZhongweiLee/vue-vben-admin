<template>
  <BasicDrawer
    v-bind="$attrs"
    title="修改角色"
    width="60%"
    show-footer
    @register="register"
    @ok="handleOk"
  >
    <div>
      <BasicForm @register="registerForm" />
      <div class="flex">
        <CollapseContainer title="选择菜单" class="mr-4" :style="{ width: '50%' }">
          <BasicTree
            ref="treeRef"
            :tree-data="treeData"
            :checked-keys="checkedKeys"
            :checkable="true"
          />
        </CollapseContainer>
        <CollapseContainer title="选择操作权限" class="mr-4" :style="{ width: '50%' }">
          <BasicTree
            ref="treePermRef"
            :tree-data="treePermData"
            :checked-keys="permCheckedKeys"
            :checkable="true"
          />
        </CollapseContainer>
      </div>
    </div>
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { CollapseContainer } from '/@/components/Container/index';
  import { BasicTree, TreeActionType, TreeItem } from '/@/components/Tree/index';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { useMessage } from '/@/hooks/web/useMessage';

  import { RoleEditParam } from '/@/api/system/role/model/roleModel';
  import { roleEditApi, roleGetByIdApi } from '/@/api/system/role/role';
  import { permissionOptionTreeApi } from '/@/api/system/perm/permission';

  const schemas: FormSchema[] = [
    {
      field: 'roleId',
      component: 'Input',
      label: '角色ID',
      colProps: { span: 12 },
      required: true,
      show: false,
    },

    {
      field: 'roleName',
      component: 'Input',
      label: '角色名称',
      colProps: {
        span: 12,
      },
      required: true,
    },
    {
      field: 'roleKey',
      component: 'Input',
      label: '角色编码',
      colProps: { span: 12 },
      required: true,
      componentProps: { placeholder: '请填写英文' },
    },
    {
      field: 'roleSort',
      component: 'Input',
      label: '排序',
      colProps: { span: 12 },
      required: true,
    },
    {
      field: 'remark',
      component: 'Input',
      label: '备注',
      colProps: {
        span: 12,
      },
    },
    {
      field: 'admin',
      component: 'RadioGroup',
      label: '管理员',
      colProps: { span: 24 },
      componentProps: {
        options: [
          { label: '是', value: '1' },
          { label: '否', value: '0' },
        ],
      },
      required: true,
    },
  ];

  export default defineComponent({
    components: { BasicDrawer, BasicForm, BasicTree, CollapseContainer },
    setup() {
      const treeRef = ref<Nullable<TreeActionType>>(null);
      const treeData = ref<TreeItem[]>([]);
      const checkedKeys = ref<string[]>();

      const treePermRef = ref<Nullable<TreeActionType>>(null);
      const treePermData = ref<TreeItem[]>([]);
      const permCheckedKeys = ref<string[]>();

      const [registerForm, { validateFields, setFieldsValue }] = useForm({
        labelWidth: 120,
        schemas,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 24,
        },
      });

      function getTree() {
        const tree = unref(treeRef);
        if (!tree) {
          throw new Error('tree is null!');
        }
        return tree;
      }
      function getPermTree() {
        const tree = unref(treePermRef);
        if (!tree) {
          throw new Error('tree is null!');
        }
        return tree;
      }

      const [register, { closeDrawer }] = useDrawerInner((data) => {
        treeData.value = data.options;

        permissionOptionTreeApi().then((val) => {
          treePermData.value = val;

          //查询角色详情
          roleGetByIdApi(data.roleId).then((val) => {
            //设置表单
            setFieldsValue({
              roleId: val.roleId,
              roleName: val.roleName,
              status: val.status,
              roleKey: val.roleKey,
              roleSort: val.roleSort,
              remark: val.remark,
              admin: val.admin,
              options: data.options,
            });
            var selectKeys: string[] = [];
            if (val.menuIds != null) {
              val.menuIds.forEach((element) => {
                selectKeys.push(element.toString());
              });
            }
            var permSelectKeys: string[] = [];
            if (val.permissionIds != null) {
              val.permissionIds.forEach((element) => {
                permSelectKeys.push(element.toString());
              });
            }
            checkedKeys.value = selectKeys;
            permCheckedKeys.value = permSelectKeys;
          });
        });
      });
      async function handleOk() {
        try {
          const keys = getTree().getCheckedKeys() as string[];
          const permKeys = getPermTree().getCheckedKeys() as string[];

          const res = (await validateFields()) as RoleEditParam;
          res.menus = keys;
          res.permissions = permKeys;
          roleEditApi(res).then(() => {
            closeDrawer();
            useMessage().createMessage.info('角色修改成功');
          });
        } catch (error) {
          console.warn(error);
        }
      }
      return {
        register,
        schemas,
        registerForm,
        handleOk,
        closeDrawer,
        treeData,
        treeRef,
        checkedKeys,
        treePermData,
        treePermRef,
        permCheckedKeys,
      };
    },
  });
</script>
