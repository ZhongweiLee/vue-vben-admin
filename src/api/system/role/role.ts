import { defHttp } from '/@/utils/http/axios';
import {
  RoleAddParam,
  RoleListGetResultModel,
  RoleListItem,
  RoleListParams,
} from './model/roleModel';

enum Api {
  roleListUri = '/role/getRoleList',
  roleAddUri = '/role/addRole',
}

/**
 * @description: 角色列表
 */
export function roleListApi(params: RoleListParams) {
  return defHttp.request<RoleListGetResultModel>({
    url: Api.roleListUri,
    method: 'GET',
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}

export function roleAddApi(params: RoleAddParam) {
  return defHttp.request<RoleListItem>({
    url: Api.roleAddUri,
    method: 'POST',
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}
