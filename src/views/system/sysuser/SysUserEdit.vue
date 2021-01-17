<template>
  <BasicModal v-bind="$attrs" @register="register" title="系统用户修改" @ok="handleSubmit">
    <BasicForm :model="model" @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { sysUserUpdateApi } from '/@/api/system/sysuser/sysuser';
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
        //options: 'model.deptOptions',
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
        setFieldsValue({
          userId: data.userId,
          phone: data.phone,
          username: data.username,
          email: data.email,
          nickname: data.nickname,
          sex: data.sex,
          deptId: data.deptId,
          deptName: data.deptName,
          postId: data.postId,
          postName: data.postName,
          remark: data.remark,
        });
      });

      async function handleSubmit() {
        try {
          const res = (await validateFields()) as SysUserUpdateParams;
          //const v = getFieldsValue();
          sysUserUpdateApi(res).then((val) => {
            //console.log(val);
          });
          //createMessage.success('click search,values:' + JSON.stringify(v));
          closeModal();
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
