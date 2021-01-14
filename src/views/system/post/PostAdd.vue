<template>
  <BasicModal v-bind="$attrs" @register="register" title="系统用户添加" @ok="handleSubmit">
    <BasicForm :model="model" @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { postAddApi } from '/@/api/system/post/post';
  import { PostAddParam } from '/@/api/system/post/model/postModel';
  import { useMessage } from '/@/hooks/web/useMessage';

  const schemas: FormSchema[] = [
    {
      field: 'postName',
      component: 'Input',
      label: '岗位名称',
      required: true,
      colProps: {
        span: 12,
      },
    },
    {
      field: 'postCode',
      component: 'Input',
      label: '岗位简称',
      required: true,
      colProps: {
        span: 12,
      },
    },
    {
      field: 'sort',
      component: 'InputNumber',
      label: '排序',
      required: true,
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

      const [register, { closeModal }] = useModalInner(() => {
        setFieldsValue({
          postName: '',
          postCode: '',
          sort: '',
          remark: '',
        });
      });

      async function handleSubmit() {
        try {
          const res = (await validateFields()) as PostAddParam;

          postAddApi(res).then(() => {
            useMessage().createMessage.info('添加成功');
          });
          closeModal();
        } catch (error) {
          useMessage().createMessage.error('出错啦～');
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
