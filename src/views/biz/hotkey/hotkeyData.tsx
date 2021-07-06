import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import moment from 'moment';
import { dictDataOptionsApi } from '/@/api/system/dict/dict';
import { Tag } from 'ant-design-vue';

export function getColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 50,
    },
    {
      title: '热搜词',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: '排序',
      width: 50,
      dataIndex: 'sort',
    },
    {
      title: '状态',
      width: 100,
      dataIndex: 'state',
      customRender: ({ record }) => {
        const color = record.state === 1 ? 'green' : 'red';
        const text = record.state === 1 ? '正常' : '失效';
        return <Tag color={color}>{() => text}</Tag>;
      },
    },
    {
      title: '创建时间',
      width: 150,
      dataIndex: 'createdAt',
      customRender: ({ record }) => moment(record.createdAt).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: '修改时间',
      width: 150,
      dataIndex: 'updatedAt',
      customRender: ({ record }) => moment(record.updatedAt).format('YYYY-MM-DD HH:mm:ss'),
    },
  ];
}

export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: `name`,
        label: `热搜词`,
        component: 'Input',
        colProps: {
          span: 8,
        },
      },
      {
        field: `state`,
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