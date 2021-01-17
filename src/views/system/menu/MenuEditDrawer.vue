<template>
  <BasicDrawer
    v-bind="$attrs"
    title="修改菜单"
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
  import {
    menuAddApi,
    menuEditApi,
    menuGetByIdApi,
    menuGetDirOptionApi,
  } from '/@/api/system/menu/menu';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { useMessage } from '/@/hooks/web/useMessage';

  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { dictDataOptionsApi } from '/@/api/system/dict/dict';
  import { MenuEditParam, MenuListItem } from '/@/api/system/menu/model/menuModel';

  const schemas: FormSchema[] = [
    {
      field: 'id',
      component: 'Input',
      label: 'id',
      colProps: { span: 12 },
      componentProps: {
        placeholder: 'bx:bxs-user',
      },
      show: false,
    },
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
      colProps: { span: 24 },
      componentProps: { placeholder: '/system/sysuser/SysUserList' },
      show: ({ values }) => {
        return values.menuType == '1';
      },
    },
    {
      field: 'redirect',
      component: 'Input',
      label: '跳转',
      colProps: { span: 24 },
      componentProps: { placeholder: '/permission/front/page' },
      show: ({ values }) => {
        return values.menuType == '2';
      },
    },
    {
      field: 'parentId',
      component: 'ApiSelect',
      label: '父级目录',
      defaultValue: '',
      colProps: { span: 24 },
      componentProps: { api: () => menuGetDirOptionApi(), placeholder: '不选择则为一级菜单' },
    },
    {
      field: 'sort',
      component: 'Input',
      label: '排序',
      colProps: { span: 12 },
      required: true,
    },
    {
      field: 'status',
      component: 'ApiSelect',
      label: '状态',
      colProps: { span: 12 },
      componentProps: { api: () => dictDataOptionsApi('sys_common_status') },
      required: true,
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
        //请求接口查询详情
        menuGetByIdApi(data.id).then((res) => {
          //设置表单
          setFieldsValue({
            metaTitle: res.metaTitle,
            component: res.component,
            id: data.id,
            metaIcon: res.metaIcon,
            name: res.name,
            parentId: res.parentId == 0 ? '' : res.parentId.toString(),
            path: res.path,
            redirect: res.redirect,
            sort: res.sort,
            status: res.status,
            menuType:
              res.component == 'LAYOUT'
                ? '2'
                : res.component == ''
                ? '2'
                : res.component == null
                ? '2'
                : '1',
          });
        });
      });
      async function handleOk() {
        try {
          const res = (await validateFields()) as MenuEditParam;
          menuEditApi(res).then(() => {
            closeDrawer();
            useMessage().createMessage.info('修改成功');
          });
        } catch (error) {
          useMessage().createMessage.error('出错啦～');
        }
      }
      return {
        register,
        schemas,
        registerForm,
        handleOk,
        closeDrawer,
      };
    },
  });
</script>
