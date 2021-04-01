import { dictDataOptionsApi } from '/@/api/system/dict/dict';
import { FormSchema } from '/@/components/Form/index';

export const schemas: FormSchema[] = [
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
      api: () => dictDataOptionsApi('trail_state'),
    },
    colProps: {
      span: 8,
    },
  },
];

const needMountainGuideOptions: LabelValueOptions = [
  {
    label: '必须',
    value: '1',
  },
  {
    label: '非必需',
    value: '0',
  },
];

const ticketFreeOption: LabelValueOptions = [
  {
    label: '有门票',
    value: '1',
  },
  {
    label: '无门票',
    value: '0',
  },
];

export const addSchemas: FormSchema[] = [
  {
    field: 'shortName',
    component: 'Input',
    label: '线路简称',
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 'province',
    component: 'Input',
    label: '省份',
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 'destination',
    component: 'Input',
    label: '目的地',
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 'ticketFree',
    component: 'RadioGroup',
    label: '门票',
    componentProps: {
      options: ticketFreeOption,
    },
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 'needMountainGuide',
    component: 'RadioGroup',
    label: '需高山向导',
    componentProps: {
      options: needMountainGuideOptions,
    },
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 'maximumAltitude',
    component: 'Input',
    label: '最高海拔',
    componentProps: {
      addonAfter: '米',
    },
    colProps: {
      offset: 2,
    },
    required: true,
  },
  {
    field: 'days',
    component: 'Input',
    label: '行程天数',
    componentProps: {
      addonAfter: '天',
    },
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 'totalMoney',
    component: 'Input',
    label: '人均消费',
    componentProps: {
      addonAfter: '元',
    },
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 'km',
    component: 'Input',
    label: '公里数',
    required: true,
    colProps: {
      offset: 2,
    },
    componentProps: {
      addonAfter: '公里',
    },
  },
  {
    field: 'sceneryStar',
    component: 'InputNumber',
    label: '风景指数',
    required: true,
    colProps: {
      offset: 2,
    },
    slot: 'sceneryStar',
  },
  {
    field: 'hardship',
    component: 'InputNumber',
    label: '线路难度',
    required: true,
    colProps: {
      offset: 2,
    },
    slot: 'hardship',
  },
  {
    field: 'maturity',
    component: 'InputNumber',
    label: '成熟度',
    required: true,
    colProps: {
      offset: 2,
    },
    slot: 'maturity',
  },

  {
    field: 'title',
    component: 'Input',
    label: '标题',
    required: true,
    colProps: {
      offset: 2,
      span: 22,
    },
  },
  {
    field: 'content',
    component: 'InputTextArea',
    label: '内容',
    required: true,
    colProps: {
      offset: 2,
      span: 22,
    },
    componentProps: {
      rows: 5,
    },
  },
];

export const trailImageSchemas: FormSchema[] = [];
export const trailInfoSchemas: FormSchema[] = [
  {
    field: 'campInfo',
    component: 'InputTextArea',
    label: '营地信息',
    required: true,
    colProps: {
      offset: 2,
      span: 22,
    },
    componentProps: {
      rows: 4,
    },
  },
  {
    field: 'foodInfo',
    component: 'InputTextArea',
    label: '食物补给',
    required: true,
    colProps: {
      offset: 2,
      span: 22,
    },
    componentProps: {
      rows: 4,
    },
  },
  {
    field: 'horseInfo',
    component: 'InputTextArea',
    label: '马帮信息',
    required: true,
    colProps: {
      offset: 2,
      span: 22,
    },
    componentProps: {
      rows: 4,
    },
  },
  {
    field: 'localGuideInfo',
    component: 'InputTextArea',
    label: '本地向导',
    required: true,
    colProps: {
      offset: 2,
      span: 22,
    },
    componentProps: {
      rows: 4,
    },
  },
  {
    field: 'mountainGuideInfo',
    component: 'InputTextArea',
    label: '高山向导',
    required: true,
    colProps: {
      offset: 2,
      span: 22,
    },
    componentProps: {
      rows: 4,
    },
  },
  {
    field: 'packageInfo',
    component: 'InputTextArea',
    label: '装备信息',
    required: true,
    colProps: {
      offset: 2,
      span: 22,
    },
    componentProps: {
      rows: 4,
    },
  },
  {
    field: 'trafficInfo',
    component: 'InputTextArea',
    label: '交通信息',
    required: true,
    colProps: {
      offset: 2,
      span: 22,
    },
    componentProps: {
      rows: 4,
    },
  },
  {
    field: 'waterInfo',
    component: 'InputTextArea',
    label: '水源信息',
    required: true,
    colProps: {
      offset: 2,
      span: 22,
    },
    componentProps: {
      rows: 4,
    },
  },
  {
    field: 'waring',
    component: 'InputTextArea',
    label: '注意事项',
    componentProps: {
      rows: 4,
    },
    required: true,
    colProps: {
      offset: 2,
      span: 22,
    },
  },
  {
    field: 'riverInfo',
    component: 'InputTextArea',
    label: '涉水情况',
    componentProps: {
      rows: 4,
    },
    required: true,
    colProps: {
      offset: 2,
      span: 22,
    },
  },
  {
    field: 'mobileSignalInfo',
    component: 'InputTextArea',
    label: '通信情况',
    componentProps: {
      rows: 4,
    },
    required: true,
    colProps: {
      offset: 2,
      span: 22,
    },
  },
  {
    field: 'trouble',
    component: 'InputTextArea',
    label: '以往事故',
    componentProps: {
      rows: 4,
    },
    required: true,
    colProps: {
      offset: 2,
      span: 22,
    },
  },
  {
    field: 'feeInfo',
    component: 'InputTextArea',
    label: '费用信息',
    componentProps: {
      rows: 4,
    },
    required: true,
    colProps: {
      offset: 2,
      span: 22,
    },
  },
];
