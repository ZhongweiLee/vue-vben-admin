import { FormProps } from '/@/components/Form';
import { BasicColumn } from '/@/components/Table/src/types/table';
import { dictDataOptionsApi } from '/@/api/system/dict/dict';
import { Tag } from 'ant-design-vue';

export function getMenuListColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      fixed: 'left',
      width: 100,
    },
    {
      title: '菜单名称',
      dataIndex: 'metaTitle',
      width: 150,
      slots: { customRender: 'metaTitle' },
      align: 'left',
      fixed: 'left',
    },
    {
      title: '图标',
      dataIndex: 'metaIcon',
      slots: { customRender: 'metaIcon' },
      width: 50,
    },
    {
      title: '路由名称',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: '组件',
      dataIndex: 'component',
      width: 150,
    },
    {
      title: '路由路径',
      width: 100,
      dataIndex: 'path',
    },
    {
      title: '跳转',
      width: 100,
      dataIndex: 'redirect',
    },
    {
      title: '排序',
      width: 50,
      dataIndex: 'sort',
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
      title: '父节点ID',
      width: 80,
      dataIndex: 'parentId',
    },
  ];
}

export function getMenuFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
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
