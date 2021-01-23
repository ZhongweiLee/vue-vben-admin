<template>
  <BasicDrawer
    v-bind="$attrs"
    title="添加角色"
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
            ref="roleAddTreeRef"
            :checked-keys="roleAddTreeCheckedKeys"
            :tree-data="roleAddTreeData"
            :checkable="true"
          />
        </CollapseContainer>
        <CollapseContainer title="选择操作权限" class="mr-4" :style="{ width: '50%' }">
          <BasicTree
            ref="roleAddPermTreeRef"
            :checked-keys="roleAddPermTreeCheckedKeys"
            :tree-data="roleAddPermTreeData"
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

  import { RoleAddParam } from '/@/api/system/role/model/roleModel';
  import { roleAddApi } from '/@/api/system/role/role';
  import { permissionOptionTreeApi } from '/@/api/system/perm/permission';

  const schemas: FormSchema[] = [
    {
      field: 'roleName',
      component: 'Input',
      label: '角色名称',
      colProps: {
        span: 12,
      },
      defaultValue: '',
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
      const roleAddTreeRef = ref<Nullable<TreeActionType>>(null);
      const roleAddTreeData = ref<TreeItem[]>([]);
      const roleAddTreeCheckedKeys = ref<string[]>([]);

      const roleAddPermTreeRef = ref<Nullable<TreeActionType>>(null);
      const roleAddPermTreeData = ref<TreeItem[]>([]);
      const roleAddPermTreeCheckedKeys = ref<string[]>([]);

      const [registerForm, { validateFields, setFieldsValue }] = useForm({
        labelWidth: 120,
        schemas,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 24,
        },
      });

      function getRoleAddTree() {
        const tree = unref(roleAddTreeRef);
        if (!tree) {
          throw new Error('tree is null!');
        }
        return tree;
      }
      function getRolePermAddTree() {
        const tree = unref(roleAddPermTreeRef);
        if (!tree) {
          throw new Error('tree is null!');
        }
        return tree;
      }

      const [register, { closeDrawer }] = useDrawerInner((data) => {
        roleAddTreeData.value = data.options;

        setFieldsValue({ options: data.options });
        roleAddTreeCheckedKeys.value = [];
        //getRoleAddTree().setCheckedKeys([]);

        permissionOptionTreeApi().then((val) => {
          roleAddPermTreeData.value = val;
          roleAddPermTreeCheckedKeys.value = [];
        });
      });
      async function handleOk() {
        try {
          const keys = getRoleAddTree().getCheckedKeys();
          const permissionKeys = getRolePermAddTree().getCheckedKeys();

          const res = (await validateFields()) as RoleAddParam;
          res.menus = keys as string[];
          res.permissions = permissionKeys as string[];
          roleAddApi(res).then(() => {
            closeDrawer();
            useMessage().createMessage.info('角色添加成功');
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
        roleAddTreeRef,
        roleAddTreeData,
        roleAddPermTreeRef,
        roleAddPermTreeData,
        roleAddTreeCheckedKeys,
        roleAddPermTreeCheckedKeys,
      };
    },
  });
</script>
