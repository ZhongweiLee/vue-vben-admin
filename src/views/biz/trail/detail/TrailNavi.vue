<template>
  <BasicModal v-bind="$attrs" @register="register" title="加入到导航" showFooter @ok="handleSubmit">
    <BasicForm :model="model" @register="registerForm" @submit="handleSubmit">
      <template #f3="{ model, field }">
        <a-select
          v-model:value="model[field]"
          placeholder="请选择导航分类"
          @change="handleAreaTagChange"
        >
          <a-select-option v-for="item in navisRef.items" :key="item.id">
            {{ item.name }}
          </a-select-option>
        </a-select>
      </template>

      <template #f1="{ model, field }">
        <Image width="140" :src="envelopePicRef" v-model:value="model[field]" />
        <Upload :showUploadList="false">
          <Button class="ml-5"> <Icon icon="feather:upload" />更换头像 </Button>
        </Upload>
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, onBeforeMount, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import Icon from '/@/components/Icon/index';

  import { Select, Input, Divider, Upload, Image, Button } from 'ant-design-vue';
  import { trailNaviListApi } from '/@/api/biz/trail/navi/navi';
  import { TrailNaviParams } from '/@/api/biz/trail/navi/model/naviModel';
  import { tagTrailApi } from '/@/api/biz/trail/trail/trail';
  import { AddTagTrailParam } from '/@/api/biz/trail/trail/model/trailModel';

  const schemas: FormSchema[] = [
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
      field: 'pid',
      component: 'Input',
      label: '导航分类',
      slot: 'f3',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'name',
      component: 'Input',
      label: '导航名称',
      required: true,
      colProps: {
        span: 24,
      },
    },
    {
      field: 'envelopePic',
      component: 'Input',
      label: '封面',
      slot: 'f1',
      colProps: {
        span: 24,
      },
    },
  ];
  export default defineComponent({
    components: {
      BasicModal,
      BasicForm,
      [Select.name]: Select,
      ASelectOption: Select.Option,
      [Input.name]: Input,
      [Input.Group.name]: Input.Group,
      [Divider.name]: Divider,
      Upload,
      Button,
      Icon,
      [Image.name]: Image,
      Image,
    },
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

      const navisRef = ref<Recordable>({});

      onBeforeMount(async () => {
        var param: TrailNaviParams = { page: 1, pageSize: 100 };
        var navis = await trailNaviListApi(param);
        console.log(navis);
        navisRef.value = navis;
      });

      const envelopePicRef = ref<string>();

      const [register, { closeModal }] = useModalInner((data) => {
        console.log(data);

        setFieldsValue({
          trailId: data.trailId,
        });
        envelopePicRef.value = data.envelopePic;
      });

      async function handleSubmit() {
        try {
          const res = (await validateFields()) as AddTagTrailParam;
          tagTrailApi(res).then(() => {
            useMessage().createMessage.info('操作成功');
          });
          closeModal();
        } catch (error) {
          console.log(error);
          useMessage().createMessage.error('出错啦～');
        }
      }

      function handleAreaTagChange(value) {
        console.log(`selected ${value}`);
        // setFieldsValue({
        //   tabTags: value,
        // });
      }

      return {
        register,
        schemas,
        registerForm,
        model: modelRef,
        navisRef,
        handleSubmit,
        handleAreaTagChange,
        envelopePicRef,
      };
    },
  });
</script>
