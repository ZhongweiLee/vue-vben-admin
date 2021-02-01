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
      title: '隐私政策',
      dataIndex: 'privacyPolicyUrl',
      width: 150,
      slots: { customRender: 'privacyPolicyUrl' },
    },
    {
      title: '服务协议',
      dataIndex: 'termsOfUseUrl',
      width: 150,
      slots: { customRender: 'termsOfUseUrl' },
    },
    {
      title: 'APP描述',
      width: 120,
      dataIndex: 'appDescribe',
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
      dataIndex: 'createTime',
      customRender: ({ record }) => moment(record.createTime).format('YYYY-MM-DD HH:mm:ss'),
    },
  ];
}

export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
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
