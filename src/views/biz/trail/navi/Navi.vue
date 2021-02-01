<template>
  <BasicTable @register="registerTable">
    <template #envelopePic="{ record }">
      <img :src="record.envelopePic" :class="`${prefixCls}__envelope-img`" />
    </template>

    <template #trailId="{ record }">
      <a-button v-if="record.trailId > 0" type="link" class="ml-2"> {{ record.trailId }}</a-button>
    </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { useDesign } from '/@/hooks/web/useDesign';

  import { getColumns, getFormConfig } from './naviData';

  import { trailNaviListApi } from '/@/api/biz/trail/navi/navi';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '线路导航',
        api: trailNaviListApi,
        columns: getColumns(),
        useSearchForm: true,
        formConfig: getFormConfig(),
        showTableSetting: false,
        showIndexColumn: true,
        isTreeTable: true,
        indentSize: 20,
        rowKey: 'id',
      });
      const { prefixCls } = useDesign('biz-trail-navi-modal');

      return {
        registerTable,
        prefixCls,
      };
    },
  });
</script>

<style lang="less">
  @prefix-cls: ~'@{namespace}-biz-trail-navi-modal';
  .@{prefix-cls} {
    &__envelope {
      &-img {
        width: 150px;
      }
    }
  }
</style>
