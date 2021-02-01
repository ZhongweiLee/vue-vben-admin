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
              disabled: record.status != '1',
            },
          ]"
        />
      </template>
      <template #toolbar>
        <a-button type="primary" @click="handleAdd"> 添加字典数据 </a-button>
      </template>
    </BasicTable>
    <DictDataAdd @register="registerAdd" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { useModal } from '/@/components/Modal';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useMessage } from '/@/hooks/web/useMessage';

  import { getDictDataColumns, getDictDataFormConfig } from './dictDataListData';
  import { dictDataDeleteApi, dictDataListApi } from '/@/api/system/dict/dict';

  import DictDataAdd from './DictDataAdd.vue';

  export default defineComponent({
    components: { BasicTable, TableAction, PageWrapper, DictDataAdd },
    setup() {
      const [registerTable, { reload }] = useTable({
        title: '字典数据',
        api: dictDataListApi,
        columns: getDictDataColumns(),
        useSearchForm: true,
        formConfig: getDictDataFormConfig(),
        showTableSetting: false,
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
          dictDataDeleteApi(record.id).then(() => {
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
