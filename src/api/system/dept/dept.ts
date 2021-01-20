import { defHttp } from '/@/utils/http/axios';
import {
  DeptListParams,
  DeptListGetResultModel,
  DeptOptionsGetResultModel,
} from './model/deptModel';

enum Api {
  deptListUri = '/dept/getDeptlist',
  deptOptionUri = '/dept/deptOptions',
}

/**
 * @description: Get 部门列表
 */
export function deptListApi(params: DeptListParams) {
  return defHttp.request<DeptListGetResultModel>({
    url: Api.deptListUri,
    method: 'GET',
    params,
    headers: {},
  });
}

/**
 * 部门下拉
 */
export function deptOptionsApi() {
  return defHttp.request<DeptOptionsGetResultModel>({
    url: Api.deptOptionUri,
    method: 'GET',
    headers: {},
  });
}
