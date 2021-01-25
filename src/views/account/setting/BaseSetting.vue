<template>
  <CollapseContainer title="基本设置" :canExpan="false">
    <a-row :gutter="24">
      <a-col :span="14">
        <BasicForm @register="register" />
      </a-col>
      <a-col :span="10">
        <div class="change-avatar">
          <img width="140" :src="headerImg" />
          <Upload :show-upload-list="false">
            <Button type="ghost" class="ml-5"> <Icon icon="feather:upload" />更换头像 </Button>
          </Upload>
        </div>
      </a-col>
    </a-row>
    <Button type="primary" @click="handleSubmit"> 更新基本信息 </Button>
  </CollapseContainer>
</template>
<script lang="ts">
  import { Button, Upload, Row, Col } from 'ant-design-vue';
  import { defineComponent, onMounted } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  import Icon from '/@/components/Icon/index';

  import { useMessage } from '/@/hooks/web/useMessage';

  import headerImg from '/@/assets/images/header.jpg';
  import { accountInfoApi, accountUpdateBaseInfoApi } from '/@/api/account/account';
  import { baseSetschemas } from './data';
  import { UpdateBaseInfoParam } from '/@/api/account/model/accountModel';

  export default defineComponent({
    components: {
      BasicForm,
      CollapseContainer,
      Button,
      Upload,
      Icon,
      [Row.name]: Row,
      [Col.name]: Col,
    },
    setup() {
      const { createMessage } = useMessage();

      const [register, { validateFields, setFieldsValue }] = useForm({
        labelWidth: 120,
        schemas: baseSetschemas,
        showActionButtonGroup: false,
      });

      onMounted(async () => {
        const data = await accountInfoApi();
        setFieldsValue(data);
      });

      async function handleSubmit() {
        accountUpdateBaseInfoApi((await validateFields()) as UpdateBaseInfoParam).then((val) => {
          setFieldsValue(val);
          createMessage.success('更新成功！');
        });
      }

      return {
        headerImg,
        register,
        handleSubmit,
      };
    },
  });
</script>

<style lang="less" scoped>
  .change-avatar {
    img {
      display: block;
      margin-bottom: 15px;
      border-radius: 50%;
    }
  }
</style>
