<template>
  <BasicModal v-bind="$attrs" @register="register" title="线路审核" @ok="handleSubmit">
    <BasicForm :model="model" @register="registerForm" @submit="handleSubmit" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { auditTrailApi } from '/@/api/biz/trail/trail/trail';
  import { AuditParam } from '/@/api/biz/trail/trail/model/trailModel';
  import { dictDataOptionsApi } from '/@/api/system/dict/dict';

  const schemas: FormSchema[] = [
    {
      field: `auditState`,
      label: `审核状态`,
      component: 'ApiSelect',
      defaultValue: '0',
      componentProps: { api: () => dictDataOptionsApi('trail_audit_state') },
      colProps: { span: 12 },
      required: true,
    },
    {
      field: 'trailId',
      component: 'Input',
      label: '线路ID',
      required: true,
      show: false,
      colProps: {
        span: 12,
      },
    },
    {
      field: 'auditRemark',
      component: 'InputTextArea',
      label: '审核意见',
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
        console.log(data);
        setFieldsValue({
          trailId: data.trailId,
          auditRemark: '',
          auditState: '0',
        });
      });

      async function handleSubmit() {
        try {
          const res = (await validateFields()) as AuditParam;
          auditTrailApi(res).then(() => {
            useMessage().createMessage.info('审核成功');
          });
          closeModal();
        } catch (error) {
          console.log(error);
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
