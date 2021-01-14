<template>
  <PageWrapper>
    <BasicTable @register="registerTable">
      <template #action="{ record, column }">
        <TableAction :actions="createActions(record, column)" />
      </template>
      <template #toolbar>
        <a-button type="primary" @click="handleAdd"> 添加岗位 </a-button>
      </template>
    </BasicTable>
    <PostAdd @register="registerAdd" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useModal } from '/@/components/Modal';
  import {
    BasicTable,
    useTable,
    EditRecordRow,
    BasicColumn,
    ActionItem,
    TableAction,
  } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { getPostListColumns, getPostListFormConfig } from './postData';

  import { deletePost, postListApi, updatePost } from '/@/api/system/post/post';
  import PostAdd from './PostAdd.vue';
  export default defineComponent({
    components: { BasicTable, TableAction, PageWrapper, PostAdd },
    setup() {
      const currentEditKeyRef = ref('');
      const [registerTable, { reload }] = useTable({
        title: '岗位列表',
        api: postListApi,
        columns: getPostListColumns(),
        useSearchForm: true,
        formConfig: getPostListFormConfig(),
        showTableSetting: true,
        showIndexColumn: false,
        actionColumn: {
          width: 160,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });

      const [registerAdd, { openModal: openModalAdd }] = useModal();

      function handleAdd() {
        openModalAdd(true, {}, true);
      }
      function handleEdit(record: EditRecordRow) {
        currentEditKeyRef.value = record.key;
        record.onEdit?.(true);
      }

      function handleCancel(record: EditRecordRow) {
        currentEditKeyRef.value = '';
        record.onEdit?.(false, true);
      }

      async function handleSave(record: EditRecordRow) {
        const pass = await record.onEdit?.(false, true);
        if (pass) {
          currentEditKeyRef.value = '';
          try {
            updatePost(record).then(() => {
              useMessage().createMessage.info('操作成功');
            });
          } catch (error) {}
        }
      }

      async function handleDelete(record: EditRecordRow) {
        try {
          deletePost(record.postId).then(() => {
            useMessage().createMessage.info('删除成功');
            reload();
          });
        } catch (error) {
          useMessage().createMessage.error('糟糕,出错了');
        }
      }

      function createActions(record: EditRecordRow, column: BasicColumn): ActionItem[] {
        if (!record.editable) {
          return [
            {
              label: '编辑',
              disabled: currentEditKeyRef.value ? currentEditKeyRef.value !== record.key : false,
              onClick: handleEdit.bind(null, record),
            },
            {
              label: '删除',
              disabled: currentEditKeyRef.value ? currentEditKeyRef.value !== record.key : false,
              onClick: handleDelete.bind(null, record),
            },
          ];
        }
        return [
          {
            label: '保存',
            onClick: handleSave.bind(null, record, column),
          },
          {
            label: '取消',
            popConfirm: {
              title: '是否取消编辑',
              okText: '点错啦，不想编辑',
              cancelText: '留下来继续修改',
              confirm: handleCancel.bind(null, record, column),
            },
          },
        ];
      }

      return {
        registerTable,
        handleEdit,
        handleDelete,
        createActions,
        handleAdd,
        registerAdd,
      };
    },
  });
</script>
