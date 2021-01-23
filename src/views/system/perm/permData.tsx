import { FormProps } from '/@/components/Form';
import { BasicColumn } from '/@/components/Table/src/types/table';
import { Tag } from 'ant-design-vue';
import moment from 'moment';
import { dictDataOptionsApi } from '/@/api/system/dict/dict';

export function getPermissionListColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      defaultHidden: true,
      width: 100,
    },
    {
      title: '权限名称',
      dataIndex: 'name',
      width: 200,
      align: 'left',
      fixed: 'left',
    },
    {
      title: '类型',
      width: 100,
      dataIndex: 'type',
      customRender: ({ record }) => {
        return record.type == '1' ? '权限' : '目录';
      },
    },
    {
      title: '权限编码',
      dataIndex: 'code',
      width: 150,
    },
    {
      title: '父ID',
      dataIndex: 'parentId',
      defaultHidden: true,
      width: 150,
    },
    {
      title: '状态',
      width: 100,
      dataIndex: 'status',
      customRender: ({ record }) => {
        const color = record.status === '1' ? 'green' : 'red';
        const text = record.status === '1' ? '正常' : '失效';
        return <Tag color={color}>{() => text}</Tag>;
      },
    },
    {
      title: '备注',
      dataIndex: 'remark',
      width: 150,
    },

    {
      title: '创建时间',
      width: 150,
      dataIndex: 'createdAt',
      customRender: ({ record }) => moment(record.createdAt).format('YYYY-MM-DD HH:mm:ss'),
    },
  ];
}

export function getPermissionFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: `code`,
        label: `权限编码`,
        component: 'Input',
        colProps: {
          span: 8,
        },
      },
      {
        field: `name`,
        label: `权限名称`,
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
