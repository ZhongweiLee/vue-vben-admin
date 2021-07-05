<template>
  <BasicModal v-bind="$attrs" @register="register" title="给线路打标签" @ok="handleSubmit">
    <BasicForm :model="model" @register="registerForm" @submit="handleSubmit">
      <template #f3="{ model, field }">
        <a-select
          mode="tags"
          v-model:value="model[field]"
          placeholder="请选择分类标签"
          @change="handleAreaTagChange"
        >
          <a-select-option v-for="item in tabsRef.items" :key="item.id" :value="item.name">
            {{ item.name }}
          </a-select-option>
        </a-select>
      </template>
      <template #f4="{ model, field }">
        <a-select
          mode="tags"
          v-model:value="model[field]"
          placeholder="请选择目的地标签"
          @change="handleChange"
        >
          <a-select-opt-group v-for="item in areasRef.items" :label="item.name" :key="item.id">
            <a-select-option
              v-for="children in item.children"
              :value="children.name"
              :key="children.id"
            >
              {{ children.name }}
            </a-select-option>
          </a-select-opt-group>
        </a-select>
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, onBeforeMount, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { tagTrailApi } from '/@/api/biz/trail/trail/trail';
  import { AddTagTrailParam } from '/@/api/biz/trail/trail/model/trailModel';
  import { TrailTabParams } from '/@/api/biz/trail/tab/model/tabModel';

  import { Select, Input, Divider } from 'ant-design-vue';
  import { trailTabListApi } from '/@/api/biz/trail/tab/tab';
  import { trailAreaListApi } from '/@/api/biz/trail/area/area';

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
      field: 'tabTags',
      component: 'Input',
      label: '分类标签',
      slot: 'f3',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'areaTags',
      component: 'Input',
      label: '目的地标签',
      slot: 'f4',
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
      ASelectOptGroup: Select.OptGroup,
      [Input.name]: Input,
      [Input.Group.name]: Input.Group,
      [Divider.name]: Divider,
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

      //const tabsRef = ref<Nullable<TrailTabListGetResultModel>>(null);
      const tabsRef = ref<Recordable>({});
      const areasRef = ref<Recordable>({});

      onBeforeMount(async () => {
        var param: TrailTabParams = { page: 1, pageSize: 100 };
        var tabs = await trailTabListApi(param);
        tabsRef.value = tabs;

        var areas = await trailAreaListApi(param);
        console.log(areas);
        areasRef.value = areas;
      });

      const [register, { closeModal }] = useModalInner((data) => {
        console.log(data);

        setFieldsValue({
          trailId: data.trailId,
        });
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

      function handleChange(value) {
        console.log(`selected ${value}`);
        // setFieldsValue({
        //   tabTags: value,
        // });
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
        tabsRef,
        areasRef,
        handleSubmit,
        handleChange,
        handleAreaTagChange,
      };
    },
  });
</script>
