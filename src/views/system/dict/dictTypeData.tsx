import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import moment from 'moment';
import { dictDataOptionsApi } from '/@/api/system/dict/dict';
import { Tag } from 'ant-design-vue';

export function getDictTypeColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'dictId',
      width: 40,
    },
    {
      title: '名称',
      dataIndex: 'dictName',
      width: 50,
    },
    {
      title: '编码',
      width: 100,
      dataIndex: 'dictType',
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 40,
      customRender: ({ record }) => {
        const color = record.status === '1' ? 'green' : 'red';
        const text = record.status === '1' ? '正常' : '失效';
        return <Tag color={color}>{() => text}</Tag>;
      },
    },
    {
      title: '备注',
      dataIndex: 'remark',
      width: 80,
    },
    {
      title: '创建人',
      width: 40,
      dataIndex: 'createBy',
    },
    {
      title: '添加时间',
      width: 120,
      dataIndex: 'createdAt',
      customRender: ({ record }) => moment(record.createdAt).format('YYYY-MM-DD HH:mm:ss'),
    },
  ];
}

export function getDictTypeFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: `dictName`,
        label: `名称`,
        component: 'Input',
        colProps: {
          span: 8,
        },
      },
      {
        field: `dictType`,
        label: `编码`,
        component: 'Input',
        colProps: {
          span: 8,
        },
      },
      {
        field: `status`,
        label: `状态`,
        component: 'ApiSelect',
        defaultValue: '',
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
