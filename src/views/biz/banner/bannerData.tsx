import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import moment from 'moment';
import { dictDataOptionsApi } from '/@/api/system/dict/dict';
import { Tag } from 'ant-design-vue';

export function getColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 50,
    },
    {
      title: '标题',
      dataIndex: 'title',
      width: 150,
    },
    {
      title: '类型',
      width: 80,
      dataIndex: 'type',
      customRender: ({ record }) => {
        return record.type === 1 ? 'APP' : record.type;
      },
    },
    {
      title: '图片地址',
      dataIndex: 'imagePath',
      width: 150,
      slots: { customRender: 'imagePath' },
    },
    {
      title: '生效时间',
      width: 150,
      dataIndex: 'effectTime',
      customRender: ({ record }) => moment(record.effectTime).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: '失效时间',
      width: 150,
      dataIndex: 'expiresTime',
      customRender: ({ record }) => moment(record.expiresTime).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: '链接地址',
      width: 100,
      dataIndex: 'url',
      slots: { customRender: 'url' },
    },
    {
      title: '可访问',
      width: 80,
      dataIndex: 'isVisible',
      customRender: ({ record }) => {
        return record.isVisible ? '是' : '否';
      },
    },
    {
      title: '排序',
      width: 50,
      dataIndex: 'sort',
    },
    {
      title: '状态',
      width: 100,
      dataIndex: 'state',
      customRender: ({ record }) => {
        const color = record.state === 1 ? 'green' : 'red';
        const text = record.state === 1 ? '正常' : '失效';
        return <Tag color={color}>{() => text}</Tag>;
      },
    },
    {
      title: '创建时间',
      width: 150,
      dataIndex: 'createdAt',
      customRender: ({ record }) => moment(record.createdAt).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: '修改时间',
      width: 150,
      dataIndex: 'updatedAt',
      customRender: ({ record }) => moment(record.updatedAt).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: '操作人',
      width: 120,
      dataIndex: 'operator',
    },
    {
      title: '备注',
      dataIndex: 'remark',
      width: 100,
    },
  ];
}

export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: `title`,
        label: `标题`,
        component: 'Input',
        colProps: {
          span: 8,
        },
      },
      {
        field: `state`,
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
