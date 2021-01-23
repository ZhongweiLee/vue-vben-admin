<template>
  <BasicModal
    v-bind="$attrs"
    width="600px"
    title="操作权限添加"
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
  import { permissionAddApi } from '/@/api/system/perm/permission';
  import { PermissionAddParam } from '/@/api/system/perm/model/permissionModel';

  const schemas: FormSchema[] = [
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
      componentProps: { placeholder: '0为一级节点' },
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
        setFieldsValue({
          name: '',
          code: '',
          type: '1',
          remark: '',
          parentId: data.id,
        });
      });

      async function handleSubmit() {
        try {
          const res = (await validateFields()) as PermissionAddParam;
          permissionAddApi(res).then(() => {
            closeModal();
            useMessage().createMessage.success('添加成功');
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
