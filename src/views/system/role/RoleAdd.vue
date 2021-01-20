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
      <CollapseContainer title="选择菜单" class="mr-4" :style="{ width: '50%' }">
        <BasicTree ref="roleAddTreeRef" :tree-data="roleAddTreeData" :checkable="true" />
      </CollapseContainer>
    </div>
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { CollapseContainer } from '/@/components/Container/index';
  import { BasicTree, TreeActionType } from '/@/components/Tree/index';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { useMessage } from '/@/hooks/web/useMessage';

  import { RoleAddParam } from '/@/api/system/role/model/roleModel';
  import { roleAddApi } from '/@/api/system/role/role';

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
      const roleAddTreeData = ref([]);

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

      const [register, { closeDrawer }] = useDrawerInner((data) => {
        roleAddTreeData.value = data.options;

        setFieldsValue({ options: data.options });
        getRoleAddTree().setCheckedKeys([]);
      });
      async function handleOk() {
        try {
          const keys = getRoleAddTree().getCheckedKeys();

          const res = (await validateFields()) as RoleAddParam;
          res.menus = keys as any[];
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
      };
    },
  });
</script>
