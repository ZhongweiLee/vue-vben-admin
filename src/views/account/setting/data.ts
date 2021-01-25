import { dictDataOptionsApi } from '/@/api/system/dict/dict';
import { FormSchema } from '/@/components/Form/index';

export interface ListItem {
  key: string;
  title: string;
  description: string;
  extra?: string;
  avatar?: string;
  color?: string;
}

// tab的list
export const settingList = [
  {
    key: '1',
    name: '基本设置',
    component: 'BaseSetting',
  },
  {
    key: '2',
    name: '安全设置',
    component: 'SecureSetting',
  },
];

// 基础设置 form
export const baseSetschemas: FormSchema[] = [
  {
    field: 'nickname',
    component: 'Input',
    label: '昵称',
    colProps: { span: 18 },
    required: true,
  },
  {
    field: 'email',
    component: 'Input',
    label: '邮箱',
    colProps: { span: 18 },
    required: true,
  },
  {
    field: 'phone',
    component: 'Input',
    label: '联系电话',
    colProps: { span: 18 },
    required: true,
  },
  {
    field: 'sex',
    component: 'ApiSelect',
    label: '性别',
    colProps: { span: 18 },
    componentProps: {
      api: () => dictDataOptionsApi('sys_user_sex'),
    },
    required: true,
  },
];

// 安全设置 list
export const secureSettingList: ListItem[] = [
  {
    key: '1',
    title: '账户密码',
    description: '建议密码中包含大小写数字特殊字符串',
    extra: '修改',
  },
];
