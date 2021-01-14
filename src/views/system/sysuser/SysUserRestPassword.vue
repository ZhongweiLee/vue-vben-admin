<template>
  <BasicModal v-bind="$attrs" @register="register" title="重置用户密码" @ok="handleSubmit">
    <BasicForm @register="registerForm" :model="model" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { sysUserResetPasswordApi } from '/@/api/system/sysuser/sysuser';
  import { SysUserResetPasswordParams } from '/@/api/system/sysuser/model/sysuserModel';

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
      componentProps: { disabled: true },
      colProps: {
        span: 12,
      },
    },
    {
      field: 'password',
      component: 'Input',
      label: '新密码',
      required: true,
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
        setFieldsValue({
          userId: data.userId,
          username: data.username,
          nickname: data.nickname,
          password: '',
        });
      });

      async function handleSubmit() {
        try {
          const res = (await validateFields()) as SysUserResetPasswordParams;
          sysUserResetPasswordApi(res).then((val) => {
            console.log(val);
          });
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
