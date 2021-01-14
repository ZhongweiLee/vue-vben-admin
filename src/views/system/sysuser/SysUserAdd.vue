<template>
  <BasicModal v-bind="$attrs" @register="register" title="系统用户添加" @ok="handleSubmit">
    <BasicForm @register="registerForm" :model="model" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { sysUserAddApi } from '/@/api/system/sysuser/sysuser';
  import { SysUserAddParams } from '/@/api/system/sysuser/model/sysuserModel';
  import { dictDataOptionsApi } from '/@/api/system/dict/dict';
  import { postOptionsApi } from '/@/api/system/post/post';
  import { deptOptionsApi } from '/@/api/system/dept/dept';

  const schemas: FormSchema[] = [
    {
      field: 'username',
      component: 'Input',
      label: '用户名',
      required: true,
      colProps: {
        span: 12,
      },
    },
    {
      field: 'nickname',
      component: 'Input',
      label: '昵称',
      required: true,
      colProps: {
        span: 12,
      },
    },
    {
      field: 'email',
      component: 'Input',
      label: '邮箱',
      required: true,
      colProps: {
        span: 12,
      },
    },
    {
      field: 'phone',
      component: 'Input',
      label: '手机号',
      required: true,
      colProps: {
        span: 12,
      },
    },
    {
      field: 'sex',
      component: 'ApiSelect',
      label: '性别',
      colProps: {
        span: 12,
      },
      componentProps: {
        api: () => dictDataOptionsApi('sys_user_sex'),
      },
    },
    {
      field: 'deptId',
      component: 'ApiSelect',
      label: '部门',
      componentProps: {
        api: () => deptOptionsApi(),
      },
      colProps: {
        span: 12,
      },
    },
    {
      field: 'postId',
      component: 'ApiSelect',
      label: '岗位',
      componentProps: {
        api: () => postOptionsApi(),
      },
      colProps: {
        span: 12,
      },
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
      field: 'password',
      component: 'Input',
      required: true,
      label: '初始密码',
      colProps: {
        span: 12,
      },
    },
  ];
  export default defineComponent({
    components: { BasicModal, BasicForm },
    setup() {
      const modelRef = ref({});
      const [registerForm, { validateFields, setFieldsValue }] = useForm({
        labelWidth: 80,
        schemas,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 24,
        },
      });

      const [register, { closeModal }] = useModalInner(() => {
        setFieldsValue({
          password: '',
          phone: '',
          username: '',
          email: '',
          nickname: '',
          sex: '',
          deptId: '',
          deptName: '',
          postId: '',
          postName: '',
          remark: '',
        });
      });

      async function handleSubmit() {
        try {
          const res = (await validateFields()) as SysUserAddParams;
          //const v = getFieldsValue();
          sysUserAddApi(res).then((val) => {
            console.log(val);
          });
          //createMessage.success('click search,values:' + JSON.stringify(v));
          closeModal();
        } catch (error) {
          console.log('not passing', error);
        }
      }

      return {
        register,
        schemas,
        registerForm,
        model: modelRef,
        handleSubmit,
      };
    },
  });
</script>
