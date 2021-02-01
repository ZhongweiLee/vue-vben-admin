import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import moment from 'moment';

export function getColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 50,
    },
    {
      title: '手机品牌',
      dataIndex: 'brand',
      width: 100,
    },
    {
      title: '手机型号',
      width: 120,
      dataIndex: 'model',
    },
    {
      title: '手机OS版本',
      dataIndex: 'version',
      width: 100,
    },
    {
      title: 'app版本',
      dataIndex: 'appVersion',
      width: 100,
    },
    {
      title: '设备类型',
      width: 100,
      dataIndex: 'device',
    },
    {
      title: '用户ID',
      width: 120,
      dataIndex: 'userId',
    },
    {
      title: '时间',
      width: 150,
      dataIndex: 'createTime',
      customRender: ({ record }) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: '错误日志',
      width: 800,
      dataIndex: 'errorLog',
      align: 'left',
    },
  ];
}

export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: `brand`,
        label: `手机品牌`,
        component: 'Input',
        colProps: {
          span: 8,
        },
      },
      {
        field: `appVersion`,
        label: `APP版本`,
        component: 'Input',
        colProps: {
          span: 8,
        },
      },
      {
        field: `userId`,
        label: `用户ID`,
        component: 'Input',
        colProps: {
          span: 8,
        },
      },
    ],
  };
}
