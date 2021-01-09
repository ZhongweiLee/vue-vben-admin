<template>
  <BasicTable @register="registerTable">
    <template #admin="{ record }"> {{ record.status == '0' ? '有效' : '停用' }}</template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getSysUserListColumns, getSysUserListFormConfig } from './sysuserData';
  import { sysUserListApi } from '/@/api/system/sysuser/sysuser';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '系统用户列表',
        api: sysUserListApi,
        columns: getSysUserListColumns(),
        useSearchForm: true,
        formConfig: getSysUserListFormConfig(),
        showTableSetting: true,
        showIndexColumn: false,
      });

      return {
        registerTable,
      };
    },
  });
</script>
