<template>
  <BasicModal v-bind="$attrs" @register="register" title="修改用户角色" @ok="handleSubmit">
    <BasicForm :model="model" @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { sysUserGetDetailApi, sysUserUpdateApi } from '/@/api/system/sysuser/sysuser';
  import { SysUserUpdateParams } from '/@/api/system/sysuser/model/sysuserModel';
  import { dictDataOptionsApi } from '/@/api/system/dict/dict';
  import { postOptionsApi } from '/@/api/system/post/post';
  import { deptOptionsApi } from '/@/api/system/dept/dept';

  const schemas: FormSchema[] = [
    {
      field: 'userId',
      component: 'Input',
      label: '用户ID',
      required: true,
      colProps: {
        span: 12,
      },
      defaultValue: '0',
      show: false,
    },
    {
      field: 'username',
      component: 'Input',
      label: '用户名',
      required: true,
      colProps: {
        span: 12,
      },
      componentProps: { disabled: true },
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
      defaultValue: 'model.sex',
      componentProps: {
        api: () => dictDataOptionsApi('sys_user_sex'),
      },
    },
    {
      field: 'deptId',
      component: 'ApiSelect',
      label: '部门',
      defaultValue: 'model.deptId',
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
      defaultValue: 'model.postId',
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

      const [register, { closeModal }] = useModalInner((data) => {
        sysUserGetDetailApi(data.userId).then((val) => {
          setFieldsValue({
            userId: val.userId,
            username: val.username,
            nickname: val.nickname,
            phone: val.phone,
            email: val.email,
            sex: val.sex,
            deptId: val.deptId.toString(),
            postId: val.postId.toString(),
            remark: val.remark,
          });
        });
      });

      async function handleSubmit() {
        try {
          const res = (await validateFields()) as SysUserUpdateParams;
          //const v = getFieldsValue();
          sysUserUpdateApi(res).then(() => {
            //console.log(val);
            closeModal();
          });
          //createMessage.success('click search,values:' + JSON.stringify(v));
        } catch (error) {
          console.warn('not passing', error);
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
