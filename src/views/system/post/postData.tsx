import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import moment from 'moment';
import { Tag } from 'ant-design-vue';

import { dictDataOptionsApi } from '/@/api/system/dict/dict';

export function getPostListColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'postId',
      width: 50,
      align: 'center',
    },
    {
      title: '岗位名称',
      dataIndex: 'postName',
      editRow: true,
      editRule: true,
      width: 120,
      align: 'center',
    },
    {
      title: '岗位编码',
      width: 100,
      dataIndex: 'postCode',
      editRow: true,
      editRule: true,
      align: 'center',
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 100,
      align: 'center',
      customRender: ({ record }) => {
        const color = record.status === '1' ? 'green' : 'red';
        const text = record.status === '1' ? '正常' : '失效';
        return <Tag color={color}>{() => text}</Tag>;
      },
    },
    {
      title: '排序',
      width: 100,
      dataIndex: 'sort',
      align: 'center',
      editRow: true,
      editComponent: 'InputNumber',
    },
    {
      title: '创建时间',
      width: 120,
      dataIndex: 'createdAt',
      align: 'center',
      customRender: ({ record }) => moment(record.createdAt).format('YYYY-MM-DD HH:mm:ss'),
    },
  ];
}

export function getPostListFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: `postName`,
        label: `岗位名称`,
        component: 'Input',
        colProps: {
          span: 8,
        },
      },
      {
        field: `postCode`,
        label: `岗位编码`,
        component: 'Input',
        colProps: {
          span: 8,
        },
      },
      {
        field: `status`,
        label: `状态`,
        component: 'ApiSelect',
        defaultValue: '1',
        componentProps: {
          api: () => dictDataOptionsApi('sys_common_status'),
        },
        colProps: {
          span: 8,
        },
      },
    ],
  };
}
