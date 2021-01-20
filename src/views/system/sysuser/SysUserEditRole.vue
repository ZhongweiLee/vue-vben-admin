<template>
  <BasicModal v-bind="$attrs" @register="register" title="系统用户修改" @ok="handleSubmit">
    <BasicForm :model="model" @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { sysUserGetDetailApi, sysUserModifyRoleApi } from '/@/api/system/sysuser/sysuser';
  import { SysUserModifyRoleParam } from '/@/api/system/sysuser/model/sysuserModel';
  import { useMessage } from '/@/hooks/web/useMessage';

  const roleCheckBoxData: any = [];

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
      componentProps: { disabled: true },
    },
    {
      field: 'roleIds',
      component: 'CheckboxGroup',
      label: '角色',
      componentProps: {
        options: roleCheckBoxData,
      },
      colProps: {
        span: 24,
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
        if (roleCheckBoxData.length > 0) {
          roleCheckBoxData.splice(0, roleCheckBoxData.length);
        }
        var checkboxoptions = data.options as any[];
        checkboxoptions.forEach((v) => {
          roleCheckBoxData.push(v);
        });

        sysUserGetDetailApi(data.userId).then((val) => {
          setFieldsValue({
            userId: val.userId,
            username: val.username,
            nickname: val.nickname,
            roleIds: val.roleIds,
          });
        });
      });

      async function handleSubmit() {
        try {
          const res = (await validateFields()) as SysUserModifyRoleParam;
          //const v = getFieldsValue();
          sysUserModifyRoleApi(res).then(() => {
            //console.log(val);
            closeModal();
            useMessage().createMessage.success('角色修改成功');
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
