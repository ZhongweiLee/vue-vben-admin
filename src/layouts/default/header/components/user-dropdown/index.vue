<template>
  <Dropdown placement="bottomLeft" :overlayClassName="`${prefixCls}-dropdown-overlay`">
    <span :class="[prefixCls, `${prefixCls}--${theme}`]">
      <img
        :class="`${prefixCls}__header`"
        :src="`${getUserInfo.avatar == '' ? headerImg : getUserInfo.avatar}`"
      />
      <span :class="`${prefixCls}__info`">
        <span :class="`${prefixCls}__name anticon`">{{ getUserInfo.nickname }}</span>
      </span>
    </span>

    <template #overlay>
      <Menu @click="handleMenuClick">
        <MenuItem key="profile" :text="t('layout.header.dropdownItemProfile')" icon="gg:profile" />
        <MenuDivider />
        <MenuItem
          key="loginOut"
          :text="t('layout.header.dropdownItemLoginOut')"
          icon="carbon:power"
        />
      </Menu>
    </template>
  </Dropdown>
</template>
<script lang="ts">
  // components
  import { Dropdown, Menu } from 'ant-design-vue';

  import { defineComponent, computed } from 'vue';

  import { useRouter } from 'vue-router';
  import { PageEnum } from '/@/enums/pageEnum';

  // res

  import { userStore } from '/@/store/modules/user';

  import { useI18n } from '/@/hooks/web/useI18n';

  import { useDesign } from '/@/hooks/web/useDesign';
  import { createAsyncComponent } from '/@/utils/factory/createAsyncComponent';
  import { propTypes } from '/@/utils/propTypes';
  import headerImg from '/@/assets/images/header.jpg';

  type MenuEvent = 'loginOut' | 'profile';

  export default defineComponent({
    name: 'UserDropdown',
    components: {
      Dropdown,
      Menu,
      MenuItem: createAsyncComponent(() => import('./DropMenuItem.vue')),
      MenuDivider: Menu.Divider,
    },
    props: {
      theme: propTypes.oneOf(['dark', 'light']),
    },
    setup() {
      const { prefixCls } = useDesign('header-user-dropdown');
      const { t } = useI18n();

      const { push } = useRouter();

      const getUserInfo = computed(() => {
        const { nickname = '', avatar = '' } = userStore.getUserInfoState || {};
        return { nickname, avatar };
      });

      //  login out
      function handleLoginOut() {
        userStore.confirmLoginOut();
      }

      function handleMenuClick(e: { key: MenuEvent }) {
        switch (e.key) {
          case 'loginOut':
            handleLoginOut();
            break;
          case 'profile':
            push(PageEnum.PROFILE).then(() => {});

            break;
        }
      }

      return {
        prefixCls,
        t,
        getUserInfo,
        handleMenuClick,
        headerImg,
      };
    },
  });
</script>
<style lang="less">
  @prefix-cls: ~'@{namespace}-header-user-dropdown';

  .@{prefix-cls} {
    display: flex;
    height: @header-height;
    min-width: 100px;
    padding: 0 0 0 10px;
    padding-right: 10px;
    overflow: hidden;
    font-size: 12px;
    cursor: pointer;
    align-items: center;

    &:hover {
      background: @header-light-bg-hover-color;
    }

    img {
      width: 40px;
      height: 40px;
      margin-right: 8px;
    }

    &__header {
      border-radius: 50%;
    }

    &__name {
      font-size: 14px;
    }

    &--dark {
      &:hover {
        background: @header-dark-bg-hover-color;
      }
    }

    &--light {
      .@{prefix-cls}__name {
        color: @text-color-base;
      }

      .@{prefix-cls}__desc {
        color: @header-light-desc-color;
      }
    }

    &-dropdown-overlay {
      .ant-dropdown-menu-item {
        min-width: 160px;
      }
    }
  }
</style>
