import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import moment from 'moment';
import { Tag } from 'ant-design-vue';
import { dictDataOptionsApi } from '/@/api/system/dict/dict';

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
      width: 150,
    },
    {
      title: '角色编码',
      width: 150,
      dataIndex: 'roleKey',
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
