import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';

export function getLoginLogColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 50,
    },
    {
      title: '用户名',
      dataIndex: 'username',
      width: 50,
    },
    {
      title: '信息',
      width: 120,
      dataIndex: 'msg',
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 40,
    },
    {
      title: 'IP',
      dataIndex: 'ipaddr',
      width: 100,
    },
    {
      title: '浏览器',
      width: 100,
      dataIndex: 'browser',
    },
    {
      title: '操作系统',
      width: 120,
      dataIndex: 'os',
    },
    {
      title: '平台',
      width: 120,
      dataIndex: 'platform',
    },
    {
      title: '登录时间',
      width: 150,
      dataIndex: 'loginTime',
    },
    {
      title: '备注',
      width: 120,
      dataIndex: 'remark',
    },
  ];
}

export function getLoginLogFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: `username`,
        label: `用户名`,
        component: 'Input',
        colProps: {
          span: 8,
        },
      },
      {
        field: `ipaddr`,
        label: `IP地址`,
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
              label: 'Success',
              value: '0',
            },
            {
              label: 'Error',
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
