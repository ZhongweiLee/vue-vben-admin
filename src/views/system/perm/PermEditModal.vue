<template>
  <BasicModal
    v-bind="$attrs"
    width="600px"
    title="操作权限修改"
    @register="register"
    @ok="handleSubmit"
  >
    <BasicForm :model="model" @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { permissionEditApi, permissionGetByIdApi } from '/@/api/system/perm/permission';
  import { PermissionEditParam } from '/@/api/system/perm/model/permissionModel';
  import { dictDataOptionsApi } from '/@/api/system/dict/dict';

  const schemas: FormSchema[] = [
    {
      field: 'id',
      component: 'Input',
      label: 'ID',
      colProps: { span: 12 },
      required: true,
      show: false,
    },

    {
      field: 'type',
      component: 'RadioGroup',
      label: '类型',
      colProps: { span: 12 },
      componentProps: {
        options: [
          { label: '目录', value: '2' },
          { label: '权限', value: '1' },
        ],
      },
      required: true,
    },
    {
      field: 'parentId',
      component: 'Input',
      label: '父节点ID',
      colProps: { span: 12 },
      required: true,
      show: false,
    },
    {
      field: 'name',
      component: 'Input',
      label: '名称',
      required: true,
      colProps: {
        span: 12,
      },
    },
    {
      field: 'code',
      component: 'Input',
      label: '权限编码',
      colProps: {
        span: 12,
      },
      show: ({ values }) => {
        return values.type == '1' ? true : false;
      },
    },
    {
      field: 'remark',
      component: 'Input',
      label: '备注',
      required: true,
      colProps: {
        span: 12,
      },
    },
    {
      field: 'status',
      component: 'ApiSelect',
      label: '状态',
      colProps: { span: 12 },
      componentProps: {
        api: () => dictDataOptionsApi('sys_common_status'),
      },
      required: true,
    },
  ];
  export default defineComponent({
    components: { BasicModal, BasicForm },
    setup() {
      const modelRef = ref({});
      const [registerForm, { validateFields, setFieldsValue }] = useForm({
        labelWidth: 100,
        schemas,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 24,
        },
      });

      const [register, { closeModal }] = useModalInner((data) => {
        permissionGetByIdApi(data.id).then((val) => {
          setFieldsValue({
            name: val.name,
            code: val.code,
            type: val.type,
            remark: val.remark,
            parentId: val.parentId,
            id: val.id,
            status: val.status,
          });
        });
      });

      async function handleSubmit() {
        try {
          const res = (await validateFields()) as PermissionEditParam;
          permissionEditApi(res).then(() => {
            closeModal();
            useMessage().createMessage.success('修改成功');
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
