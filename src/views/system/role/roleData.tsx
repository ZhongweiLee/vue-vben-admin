import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import moment from 'moment';

export function getRoleListColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'roleId',
      width: 50,
    },
    {
      title: '角色名称',
      dataIndex: 'roleName',
      width: 50,
    },
    {
      title: '角色编码',
      width: 100,
      dataIndex: 'roleKey',
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 40,
    },
    {
      title: '创建时间',
      width: 120,
      dataIndex: 'createdAt',
      customRender: ({ record }) => moment(record.createdAt).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: '是否管理员',
      width: 80,
      dataIndex: 'admin',
      slots: { customRender: 'admin' },
    },
    {
      title: '备注',
      width: 120,
      dataIndex: 'remark',
    },
  ];
}

export function getRoleListFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: `roleName`,
        label: `角色名称`,
        component: 'Input',
        colProps: {
          span: 8,
        },
      },
      {
        field: `roleKey`,
        label: `角色编码`,
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
