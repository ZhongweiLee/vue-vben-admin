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
