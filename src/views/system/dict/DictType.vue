<template>
  <PageWrapper>
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '删除',
              icon: 'ic:outline-delete',
              onClick: handleDelete.bind(null, record),
            },
          ]"
          :outside="true"
        />
      </template>
      <template #toolbar>
        <a-button type="primary" @click="handleAdd"> 添加字典 </a-button>
      </template>
    </BasicTable>
    <DictTypeAdd @register="registerAdd" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useModal } from '/@/components/Modal';
  import { PageWrapper } from '/@/components/Page';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getDictTypeColumns, getDictTypeFormConfig } from './dictTypeData';

  import { dictTypeDeleteApi, dictTypeListApi } from '/@/api/system/dict/dict';
  import { useMessage } from '/@/hooks/web/useMessage';
  import DictTypeAdd from './DictTypeAdd.vue';

  export default defineComponent({
    components: { BasicTable, TableAction, PageWrapper, DictTypeAdd },
    setup() {
      const [registerTable, { reload }] = useTable({
        title: '字典列表',
        api: dictTypeListApi,
        columns: getDictTypeColumns(),
        useSearchForm: true,
        formConfig: getDictTypeFormConfig(),
        showTableSetting: true,
        showIndexColumn: false,
        actionColumn: {
          width: 100,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      function handleDelete(record: Recordable) {
        try {
          dictTypeDeleteApi(record.dictId).then(() => {
            useMessage().createMessage.info('删除成功');
            reload();
          });
        } catch (error) {}
      }

      const [registerAdd, { openModal: openModalAdd }] = useModal();
      function handleAdd() {
        openModalAdd(true, {}, true);
      }

      return {
        registerTable,
        handleDelete,
        handleAdd,
        registerAdd,
      };
    },
  });
</script>
