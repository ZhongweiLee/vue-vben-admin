<template>
  <CollapseContainer title="安全设置" :canExpan="false">
    <List>
      <template v-for="item in list" :key="item.key">
        <ListItem>
          <ListItemMeta>
            <template #title>
              {{ item.title }}
              <div v-if="item.extra" class="extra">
                <a-button type="link" @click="handlerEidt" class="ml-2">
                  {{ item.extra }}
                </a-button>
              </div>
            </template>
            <template #description>
              <div>{{ item.description }} </div>
            </template>
          </ListItemMeta>
        </ListItem>
      </template>
    </List>
  </CollapseContainer>
  <ResetPasswordModal @register="registerResetPasswordModal" />
</template>
<script lang="ts">
  import { List } from 'ant-design-vue';
  import { defineComponent } from 'vue';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useModal } from '/@/components/Modal';

  import { secureSettingList } from './data';

  import ResetPasswordModal from './ResetPasswordModal.vue';

  export default defineComponent({
    components: {
      CollapseContainer,
      List,
      ListItem: List.Item,
      ListItemMeta: List.Item.Meta,
      ResetPasswordModal,
    },
    setup() {
      const [registerResetPasswordModal, { openModal: openModalResetPassword }] = useModal();

      function handlerEidt() {
        console.log('click edit');
        openModalResetPassword(true, {}, false);
      }
      return {
        list: secureSettingList,
        handlerEidt,
        registerResetPasswordModal,
      };
    },
  });
</script>
<style lang="less" scoped>
  .extra {
    float: right;
    margin-top: 10px;
    margin-right: 30px;
    font-weight: normal;
    color: #1890ff;
    cursor: pointer;
  }
</style>
