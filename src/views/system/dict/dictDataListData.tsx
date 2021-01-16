import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import moment from 'moment';
import { dictDataOptionsApi } from '/@/api/system/dict/dict';
import { Tag } from 'ant-design-vue';

export function getDictDataColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 40,
    },
    {
      title: '字典编码',
      width: 120,
      dataIndex: 'dictType',
    },
    {
      title: '名称',
      dataIndex: 'dictLabel',
      width: 50,
    },
    {
      title: '值',
      width: 100,
      dataIndex: 'dictValue',
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 50,
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

export function getDictDataFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: `dictType`,
        label: `字典编码`,
        component: 'Input',
        colProps: {
          span: 8,
        },
        // defaultValue: dictType,
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
