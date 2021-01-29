<template>
  <CollapseContainer title="基本设置" :canExpan="false">
    <a-row :gutter="24">
      <a-col :span="14">
        <BasicForm @register="register" />
      </a-col>
      <a-col :span="10">
        <div class="change-avatar">
          <img :src="avatar" />
          <Upload
            :show-upload-list="false"
            :multiple="true"
            :action="uploadUrl"
            :headers="headers"
            @change="handleChange"
          >
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
  import { defineComponent, onMounted, ref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  import Icon from '/@/components/Icon/index';

  import { useMessage } from '/@/hooks/web/useMessage';
  import { useGlobSetting } from '/@/hooks/setting';
  import { getToken } from '/@/utils/auth';

  import headerImg from '/@/assets/images/header.jpg';
  import {
    accountInfoApi,
    accountUpdateAvatarApi,
    accountUpdateBaseInfoApi,
  } from '/@/api/account/account';
  import { baseSetschemas } from './data';
  import { UpdateBaseInfoParam } from '/@/api/account/model/accountModel';
  import { UploadDir } from '/@/api/sys/model/uploadModel';

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

      const avatar = ref<string>();

      const { uploadUrl } = useGlobSetting();
      const headers = {
        Authorization: getToken(),
        Platform: 'admin',
      };

      onMounted(async () => {
        const data = await accountInfoApi();
        setFieldsValue(data);
        if (data.avatar != null) {
          avatar.value = data.avatar;
        } else {
          avatar.value = headerImg;
        }
      });

      async function handleSubmit() {
        accountUpdateBaseInfoApi((await validateFields()) as UpdateBaseInfoParam).then((val) => {
          setFieldsValue(val);
          createMessage.success('更新成功！');
        });
      }

      function handleChange(info: any) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          try {
            accountUpdateAvatarApi({ avatar: info.file.response.data }).then((val) => {
              avatar.value = val;
              createMessage.success(`头像修改成功`);
            });
          } catch (error) {
            createMessage.error('出错啦～');
          }
        } else if (info.file.status === 'error') {
          createMessage.error(`${info.file.name} file upload failed.`);
        }
      }

      return {
        headerImg,
        register,
        handleSubmit,
        handleChange,
        uploadUrl: uploadUrl + '?dir=' + UploadDir.Avatar,
        avatar,
        headers,
      };
    },
  });
</script>

<style lang="less" scoped>
  .change-avatar {
    img {
      display: block;
      width: 140px;
      height: 140px;
      margin-bottom: 15px;
      border-radius: 50%;
    }
  }
</style>
