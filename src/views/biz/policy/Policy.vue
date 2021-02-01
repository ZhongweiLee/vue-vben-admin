<template>
  <BasicTable @register="registerTable">
    <template #privacyPolicyUrl="{ record }">
      <a @click="openWindow(record.privacyPolicyUrl)" :title="`${record.privacyPolicyUrl}`"
        >隐私政策</a
      >
    </template>
    <template #termsOfUseUrl="{ record }">
      <a @click="openWindow(record.termsOfUseUrl)" :title="`${record.termsOfUseUrl}`">服务协议</a>
    </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { openWindow } from '/@/utils';

  import { getColumns, getFormConfig } from './policyData';

  import { appPolicyListApi } from '/@/api/biz/policy/policy';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: 'APP隐私政策与服务协议',
        api: appPolicyListApi,
        columns: getColumns(),
        useSearchForm: true,
        formConfig: getFormConfig(),
        showTableSetting: false,
        showIndexColumn: false,
        ellipsis: true,
        canResize: false,
      });

      return {
        registerTable,
        openWindow,
      };
    },
  });
</script>
