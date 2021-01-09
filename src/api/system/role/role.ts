import { defHttp } from '/@/utils/http/axios';
import { RoleListGetResultModel, RoleListParams } from './model/roleModel';

enum Api {
  roleListUri = '/role/list',
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
