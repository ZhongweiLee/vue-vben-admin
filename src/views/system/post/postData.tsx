import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import moment from 'moment';

export function getPostListColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'postId',
      width: 50,
    },
    {
      title: '岗位名称',
      dataIndex: 'postName',
      width: 50,
    },
    {
      title: '岗位编码',
      width: 100,
      dataIndex: 'postCode',
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
