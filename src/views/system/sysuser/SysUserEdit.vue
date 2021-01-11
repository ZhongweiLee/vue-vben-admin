<template>
  <BasicModal v-bind="$attrs" @register="register" title="系统用户修改" @ok="handleSubmit">
    <BasicForm @register="registerForm" :model="model" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { sysUserUpdateApi } from '/@/api/system/sysuser/sysuser';

  const schemas: FormSchema[] = [
    {
      field: 'userId',
      component: 'Input',
      label: '用户ID',
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
      colProps: {
        span: 12,
      },
    },
    {
      field: 'nickName',
      component: 'Input',
      label: '昵称',
      colProps: {
        span: 12,
      },
    },
    {
      field: 'email',
      component: 'Input',
      label: '邮箱',
      colProps: {
        span: 12,
      },
    },
    {
      field: 'phone',
      component: 'Input',
      label: '手机号',
      colProps: {
        span: 12,
      },
    },
  ];
  export default defineComponent({
    components: { BasicModal, BasicForm },
    setup() {
      const modelRef = ref({});
      const [registerForm, { setFieldsValue, getFieldsValue }] = useForm({
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
          phone: data.phone,
          username: data.username,
          email: data.email,
          nickName: data.nickName,
        });
      });
      // const { createMessage } = useMessage();
      return {
        register,
        schemas,
        registerForm,
        model: modelRef,
        handleSubmit: () => {
          const v = getFieldsValue();
          sysUserUpdateApi(v).then((val) => {
            console.log(val);
          });
          //createMessage.success('click search,values:' + JSON.stringify(v));
          closeModal();
        },
      };
    },
  });
</script>
