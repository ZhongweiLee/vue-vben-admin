import { defHttp } from '/@/utils/http/axios';
import { DeptListParams, DeptListGetResultModel } from './model/deptModel';

enum Api {
  deptListUri = '/dept/list',
}

/**
 * @description: Get 部门列表
 */
export function deptListApi(params: DeptListParams) {
  return defHttp.request<DeptListGetResultModel>({
    url: Api.deptListUri,
    method: 'GET',
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}
