import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import moment from 'moment';

export function getSysUserListColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'userId',
      width: 50,
    },
    {
      title: '用户名',
      dataIndex: 'username',
      width: 50,
    },
    {
      title: '姓名',
      width: 100,
      dataIndex: 'nickName',
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 40,
      slots: { customRender: 'status' },
    },
    {
      title: '创建时间',
      width: 120,
      dataIndex: 'createdAt',
      customRender: ({ record }) => moment(record.createdAt).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: '手机号',
      width: 80,
      dataIndex: 'phone',
    },
    {
      title: '头像',
      width: 120,
      dataIndex: 'avatar',
    },
    {
      title: '性别',
      width: 40,
      dataIndex: 'sex',
    },
    {
      title: '邮箱',
      width: 100,
      dataIndex: 'email',
    },
    {
      title: '部门',
      width: 50,
      dataIndex: 'deptName',
    },
    {
      title: '备注',
      width: 120,
      dataIndex: 'remark',
    },
  ];
}

export function getSysUserListFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: `username`,
        label: `账号`,
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
