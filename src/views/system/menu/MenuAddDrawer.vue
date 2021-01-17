<template>
  <BasicDrawer
    v-bind="$attrs"
    title="添加菜单"
    width="60%"
    show-footer
    @register="register"
    @ok="handleOk"
  >
    <div>
      <BasicForm @register="registerForm" />
    </div>
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { menuAddApi } from '/@/api/system/menu/menu';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { useMessage } from '/@/hooks/web/useMessage';

  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  const schemas: FormSchema[] = [
    {
      field: 'menuType',
      component: 'RadioButtonGroup',
      label: '类型',
      colProps: { span: 24 },
      componentProps: {
        options: [
          { label: '菜单', value: '1' },
          { label: '目录', value: '2' },
        ],
      },
      required: true,
    },
    {
      field: 'metaTitle',
      component: 'Input',
      label: '菜单名称',
      colProps: {
        span: 12,
      },
      defaultValue: '',
      required: true,
      componentProps: {
        placeholder: '系统用户',
      },
    },
    {
      field: 'metaIcon',
      component: 'Input',
      label: '图标',
      colProps: { span: 12 },
      componentProps: { placeholder: 'bx:bxs-user' },
    },

    {
      field: 'name',
      component: 'Input',
      label: '路由名称',
      colProps: {
        span: 12,
      },
      required: true,
      componentProps: { placeholder: 'SysUser' },
    },
    {
      field: 'path',
      component: 'Input',
      label: '路由路径',
      colProps: { span: 12 },
      required: true,
      componentProps: { placeholder: 'sysuser' },
    },
    {
      field: 'component',
      component: 'Input',
      label: '组件',
      colProps: { span: 12 },
      componentProps: { placeholder: '/system/sysuser/SysUserList' },
    },

    {
      field: 'redirect',
      component: 'Input',
      label: '跳转',
      colProps: { span: 12 },
      componentProps: { placeholder: '/permission/front/page' },
    },
    {
      field: 'parentId',
      component: 'Input',
      label: '父节点ID',
      colProps: { span: 12 },
      required: true,
    },
    {
      field: 'sort',
      component: 'Input',
      label: '排序',
      colProps: { span: 12 },
      required: true,
    },
    {
      field: 'isRoot',
      component: 'RadioGroup',
      label: '一级菜单',
      colProps: { span: 24 },
      componentProps: {
        options: [
          { label: '是', value: '1' },
          { label: '否', value: '0' },
        ],
      },
    },
  ];
  export default defineComponent({
    components: { BasicDrawer, BasicForm },
    setup() {
      const [registerForm, { validateFields, setFieldsValue }] = useForm({
        labelWidth: 120,
        schemas,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 24,
        },
      });
      const [register, { closeDrawer }] = useDrawerInner((data) => {
        // 方式1
        setFieldsValue({
          field2: data.data,
          field1: data.info,
        });
      });
      async function handleOk() {
        console.log('click ok');
        try {
          const res = (await validateFields()) as PostAddParam;
          menuAddApi(res).then(() => {
            closeDrawer();
            useMessage().createMessage.info('添加成功');
          });
        } catch (error) {
          useMessage().createMessage.error('出错啦～');
        }
      }
      return { register, schemas, registerForm, handleOk, closeDrawer };
    },
  });
</script>
