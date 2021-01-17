import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import moment from 'moment';
import { dictDataOptionsApi } from '/@/api/system/dict/dict';

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
      width: 80,
    },
    {
      title: '姓名',
      width: 100,
      dataIndex: 'nickname',
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 60,
      slots: { customRender: 'status' },
    },
    {
      title: '创建时间',
      width: 150,
      dataIndex: 'createdAt',
      customRender: ({ record }) => moment(record.createdAt).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: '手机号',
      width: 100,
      dataIndex: 'phone',
    },
    {
      title: '头像',
      width: 80,
      dataIndex: 'avatar',
      slots: { customRender: 'avatar' },
    },
    {
      title: '性别',
      width: 40,
      dataIndex: 'sex',
      customRender: ({ record }) => getSexLabel(record.sex),
    },
    {
      title: '邮箱',
      width: 150,
      dataIndex: 'email',
    },
    {
      title: '部门',
      width: 80,
      dataIndex: 'deptName',
    },
    {
      title: '备注',
      width: 120,
      dataIndex: 'remark',
    },
  ];
}

export function getSexLabel(sex: string): string {
  if (sex == 'M') {
    return '男';
  } else if (sex == 'F') {
    return '女';
  } else {
    return '未知';
  }
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
        field: 'status',
        component: 'ApiSelect',
        label: '状态',
        defaultValue: '1',
        componentProps: {
          api: () => dictDataOptionsApi('sys_user_status'),
        },
        colProps: {
          span: 8,
        },
      },
    ],
  };
}