import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';

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
        field: `dictId`,
        label: `ID`,
        component: 'Input',
        colProps: {
          span: 8,
        },
      },
      {
        field: `status`,
        label: `状态`,
        component: 'Select',
        defaultValue: '',
        componentProps: {
          options: [
            {
              label: '有效',
              value: '0',
            },
            {
              label: '失效',
              value: '1',
            },
          ],
        },
        colProps: {
          span: 8,
        },
      },
    ],
  };
}
