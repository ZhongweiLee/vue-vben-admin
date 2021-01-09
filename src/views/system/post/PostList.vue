<template>
  <BasicTable @register="registerTable">
    <template #form-custom> custom-slot</template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getPostListColumns, getPostListFormConfig } from './postData';

  import { postListApi } from '/@/api/system/post/post';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '岗位列表',
        api: postListApi,
        columns: getPostListColumns(),
        useSearchForm: true,
        formConfig: getPostListFormConfig(),
        showTableSetting: true,
        showIndexColumn: false,
      });

      return {
        registerTable,
      };
    },
  });
</script>
