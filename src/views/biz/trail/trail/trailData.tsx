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

export function getStateLabel(state: number): string {
  if (state == 0) {
    return '删除';
  } else if (state == 1) {
    return '已发布';
  } else if (state == 2) {
    return '草稿';
  } else if (state == 3) {
    return '用户删除';
  } else if (state == 4) {
    return '待审核';
  } else if (state == 5) {
    return '审核不通过';
  } else if (state == 6) {
    return '平台下架';
  }
  return '';
}
