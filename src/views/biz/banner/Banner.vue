<template>
  <BasicTable @register="registerTable">
    <template #imagePath="{ record }">
      <img :src="record.imagePath" :class="`${prefixCls}__banner-img`" />
    </template>
    <template #url="{ record }">
      <a @click="openWindow(record.url)" :title="`${record.url}`">链接</a>
    </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { useDesign } from '/@/hooks/web/useDesign';
  import { openWindow } from '/@/utils';

  import { getColumns, getFormConfig } from './bannerData';

  import { appBannerListApi } from '/@/api/biz/banner/banner';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: 'APP Banner列表',
        api: appBannerListApi,
        columns: getColumns(),
        useSearchForm: true,
        formConfig: getFormConfig(),
        showTableSetting: false,
        showIndexColumn: false,
        ellipsis: true,
        canResize: false,
      });

      const { prefixCls } = useDesign('biz-banner-modal');

      return {
        registerTable,
        prefixCls,
        openWindow,
      };
    },
  });
</script>

<style lang="less">
  @prefix-cls: ~'@{namespace}-biz-banner-modal';
  .@{prefix-cls} {
    &__banner {
      &-img {
        width: 150px;
      }
    }
  }
</style>
