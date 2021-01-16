<template>
  <BasicModal v-bind="$attrs" @register="register" title="添加字典数据" @ok="handleSubmit">
    <BasicForm :model="model" @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { dictDataAddApi } from '/@/api/system/dict/dict';
  import { DictDataItem } from '/@/api/system/dict/model/dictModel';

  const schemas: FormSchema[] = [
    {
      field: 'dictType',
      component: 'Input',
      label: '字典编码',
      required: true,
      colProps: { span: 12 },
    },
    {
      field: 'dictLabel',
      component: 'Input',
      label: '选项名称',
      required: true,
      colProps: {
        span: 12,
      },
    },
    {
      field: 'dictValue',
      component: 'Input',
      label: '选项值',
      required: true,
      colProps: { span: 12 },
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
          dictType: '',
          dictLabel: '',
          dictValue: '',
          remark: '',
        });
      });

      async function handleSubmit() {
        try {
          const res = (await validateFields()) as DictDataItem;

          dictDataAddApi(res).then(() => {
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
