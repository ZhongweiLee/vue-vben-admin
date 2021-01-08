import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 20,
    },
    {
      title: '用户名',
      dataIndex: 'username',
      width: 50,
    },
    {
      title: '模块',
      dataIndex: 'title',
      width: 50,
    },
    {
      title: '方法',
      dataIndex: 'method',
      width: 30,
    },
    {
      title: 'URL',
      dataIndex: 'operUrl',
      width: 100,
    },
    {
      title: 'IP',
      width: 50,
      dataIndex: 'operIp',
    },
    {
      title: '耗时',
      width: 80,
      dataIndex: 'latencyTime',
    },
    {
      title: 'UA',
      width: 120,
      dataIndex: 'userAgent',
    },
    {
      title: '操作时间',
      width: 120,
      dataIndex: 'operTime',
    },
  ];
}

export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: `title`,
        label: `模块`,
        component: 'Input',
        colProps: {
          span: 6,
        },
      },
      {
        field: `username`,
        label: `用户名`,
        component: 'Input',
        colProps: {
          span: 6,
        },
      },
      {
        field: `operUrl`,
        label: `URL`,
        component: 'Input',
        colProps: {
          span: 6,
        },
      },
      {
        field: `method`,
        label: `请求方式`,
        component: 'Select',
        defaultValue: '',
        componentProps: {
          options: [
            {
              label: 'GET',
              value: 'GET',
            },
            {
              label: 'POST',
              value: 'POST',
            },
            {
              label: 'DELETE',
              value: 'DELETE',
            },
            {
              label: 'PUT',
              value: 'PUT',
            },
            {
              label: 'OPTIONS',
              value: 'OPTIONS',
            },
          ],
        },
        colProps: {
          span: 6,
        },
      },
    ],
  };
}
