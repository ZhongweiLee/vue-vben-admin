<template>
  <BasicModal v-bind="$attrs" @register="register" title="修改密码" @ok="handleSubmit">
    <BasicForm :model="model" @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { UpdatePasswordParam } from '/@/api/account/model/accountModel';
  import { accountUpdatePasswordApi } from '/@/api/account/account';

  const schemas: FormSchema[] = [
    {
      field: 'newPassword',
      component: 'InputPassword',
      label: '新密码',
      required: true,
      componentProps: { disabled: false, placeholder: '新密码' },
      colProps: {
        span: 24,
      },
    },
    {
      field: 'newPasswordAgain',
      component: 'InputPassword',
      label: '新密码',
      required: true,
      componentProps: {
        disabled: false,
        placeholder: '再次输入新密码',
      },
      colProps: { span: 24 },
    },
  ];
  export default defineComponent({
    components: { BasicModal, BasicForm },
    setup() {
      const modelRef = ref({});
      const [registerForm, { validateFields, setFieldsValue }] = useForm({
        labelWidth: 150,
        schemas,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 24,
        },
      });

      const [register, { closeModal }] = useModalInner(() => {
        setFieldsValue({});
      });

      async function handleSubmit() {
        try {
          const res = (await validateFields()) as UpdatePasswordParam;
          accountUpdatePasswordApi(res).then(() => {
            closeModal();
          });
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
