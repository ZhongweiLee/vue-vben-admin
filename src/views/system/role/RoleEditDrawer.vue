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
      <CollapseContainer title="选择菜单" class="mr-4" :style="{ width: '50%' }">
        <BasicTree ref="treeRef" :tree-data="treeData" :checkable="true" />
      </CollapseContainer>
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

      const [registerForm, { validateFields, setFieldsValue }] = useForm({
        labelWidth: 120,
        schemas,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 24,
        },
      });

      const treeData: TreeItem[] = [];

      function getTree() {
        const tree = unref(treeRef);
        if (!tree) {
          throw new Error('tree is null!');
        }
        return tree;
      }

      const [register, { closeDrawer }] = useDrawerInner((data) => {
        var opt = data.options as TreeItem[];

        if (treeData.length > 0) {
          treeData.splice(0, treeData.length);
        }

        opt.forEach((element) => {
          treeData.push(element);
        });

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
            admin: val.admin ? '1' : '0',
            options: data.options,
          });

          var selectKeys: any[] = [];
          if (val.menuIds != null) {
            val.menuIds.forEach((element) => {
              selectKeys.push(element.toString());
            });
          }
          getTree().setCheckedKeys(selectKeys);
        });
      });
      async function handleOk() {
        try {
          const keys = getTree().getCheckedKeys() as any[];
          //useMessage().createMessage.success(JSON.stringify(keys));

          const res = (await validateFields()) as RoleEditParam;
          res.menus = keys;
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
      };
    },
  });
</script>
