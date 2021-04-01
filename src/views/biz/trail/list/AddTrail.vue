<template>
  <PageWrapper class="high-form" title="线路制定" contentBackground contentClass="p-4">
    <a-card title="基本信息" :bordered="false">
      <BasicForm @register="register">
        <template #sceneryStar="{ model, field }">
          <a-rate v-model:value="model[field]" :count="7" />
        </template>
        <template #maturity="{ model, field }">
          <a-rate v-model:value="model[field]" :count="7" />
        </template>
        <template #hardship="{ model, field }">
          <a-rate v-model:value="model[field]" :count="7" />
        </template>
      </BasicForm>
    </a-card>
    <a-card title="线路图片" :bordered="false" class="mt-5">
      <BasicForm @register="registerTrailImage" />
      <!-- <BasicUpload :maxSize="20" :maxNumber="10" @change="handleChange" :api="uploadApi" /> -->
    </a-card>

    <a-card title="线路信息" :bordered="false" class="mt-5">
      <BasicForm @register="registerTrailInfo" />
    </a-card>

    <template #rightFooter>
      <a-button type="primary" @click="submitAll"> 提交 </a-button>
    </template>
  </PageWrapper>
</template>
<script lang="ts">
  import { BasicForm, FormSchema, useForm } from '/@/components/Form';
  import { defineComponent, ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { addSchemas, trailInfoSchemas } from './trailData';
  import { Card, Input, Rate } from 'ant-design-vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { uploadApi } from '/@/api/sys/upload';
  import { trailAddApi } from '/@/api/biz/trail/trail/trail';
  import { AddTrailParam } from '/@/api/biz/trail/trail/model/trailModel';

  export default defineComponent({
    components: {
      BasicForm,
      PageWrapper,
      [Card.name]: Card,
      [Input.name]: Input,
      [Rate.name]: Rate,
    },
    setup() {
      const tableRef = ref<{ getDataSource: () => any } | null>(null);

      const [register, { validate }] = useForm({
        baseColProps: {
          span: 6,
        },
        schemas: addSchemas,
        showActionButtonGroup: false,
      });

      const imageSchemas: FormSchema[] = [
        {
          field: 'itemPic',
          component: 'Upload',
          label: '列表图片',
          colProps: { span: 8 },
          rules: [
            {
              required: true,
              message: '请选择上传文件',
            },
          ],
          componentProps: { api: uploadApi, maxNumber: 1, maxSize: 20 },
        },
        {
          field: 'envelopePic',
          component: 'Upload',
          label: '封面图片',
          colProps: { span: 8 },
          rules: [
            {
              required: true,
              message: '请选择上传文件',
            },
          ],
          componentProps: { api: uploadApi, maxNumber: 1, maxSize: 20 },
        },

        {
          field: 'gisImageUrl',
          component: 'Upload',
          label: '3D地图',
          colProps: { span: 8 },
          rules: [
            {
              required: true,
              message: '请选择上传文件',
            },
          ],
          componentProps: { api: uploadApi, maxNumber: 1, maxSize: 20 },
        },

        {
          field: 'trailNoteUrl',
          component: 'Upload',
          label: '线路图',
          colProps: { span: 8 },
          rules: [
            {
              required: true,
              message: '请选择上传文件',
            },
          ],
          componentProps: { api: uploadApi, maxNumber: 1, maxSize: 20 },
        },

        {
          field: 'altitudeImageUrl',
          component: 'Upload',
          label: '海拔走势图',
          colProps: { span: 8 },
          rules: [
            {
              required: true,
              message: '请选择上传文件',
            },
          ],
          componentProps: { api: uploadApi, maxNumber: 1, maxSize: 20 },
        },

        {
          field: 'isoheightImageUrl',
          component: 'Upload',
          label: '等高线地图',
          colProps: { span: 8 },
          rules: [
            {
              required: true,
              message: '请选择上传文件',
            },
          ],
          componentProps: { api: uploadApi, maxNumber: 1, maxSize: 20 },
        },
      ];

      //       function handleChange(list: string[]) {
      //         createMessage.info(`已上传文件${JSON.stringify(list)}`);
      //       }

      const [registerTrailImage, { validate: validateTrailImageForm }] = useForm({
        baseColProps: { span: 6 },
        schemas: imageSchemas,
        showActionButtonGroup: false,
      });

      const [registerTrailInfo, { validate: validateTrailInfoForm }] = useForm({
        baseColProps: {
          span: 6,
        },
        schemas: trailInfoSchemas,
        showActionButtonGroup: false,
      });

      const { createMessage } = useMessage();

      async function submitAll() {
        try {
          if (tableRef.value) {
            console.log('table data:', tableRef.value.getDataSource());
          }

          const [baseValues, infoValues, imageValues] = await Promise.all([
            validate(),
            validateTrailInfoForm(),
            validateTrailImageForm(),
          ]);
          console.log('form data:', baseValues, infoValues, imageValues);

          var addTrailParam: AddTrailParam = baseValues as AddTrailParam;
          addTrailParam.textInfo = infoValues;
          addTrailParam.itemPic = imageValues.itemPic[0];
          addTrailParam.envelopePic = imageValues.envelopePic[0];
          addTrailParam.altitudeImageUrl = imageValues.altitudeImageUrl[0];
          addTrailParam.gisImageUrl = imageValues.gisImageUrl[0];
          addTrailParam.isoheightImageUrl = imageValues.isoheightImageUrl[0];
          addTrailParam.trailNoteUrl = imageValues.trailNoteUrl[0];
          trailAddApi(addTrailParam).then(() => {
            createMessage.info('添加成功');
          });
        } catch (error) {
          console.log(error);
        }
      }

      return {
        register,
        registerTrailInfo,
        registerTrailImage,
        submitAll,
        tableRef,
        handleChange: (list: string[]) => {
          createMessage.info(`已上传文件${JSON.stringify(list)}`);
        },
        uploadApi,
      };
    },
  });
</script>
<style lang="less" scoped>
  .high-form {
    padding-bottom: 48px;
  }
</style>
