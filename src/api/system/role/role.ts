import { defHttp } from '/@/utils/http/axios';
import {
  RoleAddParam,
  RoleCheckBoxOptionsGetResultModel,
  RoleDetail,
  RoleEditParam,
  RoleListGetResultModel,
  RoleListItem,
  RoleListParams,
} from './model/roleModel';

enum Api {
  roleAddUri = '/role/addRole',
  roleGetUri = '/role/getRoleById',
  roleCheckBoxOptionsUri = '/role/getRoleCheckBoxOptions',
  roleListUri = '/role/getRoleList',
  roleEditUri = '/role',
}

/**
 * @description: 角色列表
 */
export function roleListApi(params: RoleListParams) {
  return defHttp.request<RoleListGetResultModel>({
    url: Api.roleListUri,
    method: 'GET',
    params,
    headers: {},
  });
}

export function roleAddApi(params: RoleAddParam) {
  return defHttp.request<RoleListItem>({
    url: Api.roleAddUri,
    method: 'POST',
    params,
    headers: {},
  });
}

export function roleGetByIdApi(roleId: number | string) {
  return defHttp.request<RoleDetail>({
    url: Api.roleGetUri + '?roleId=' + roleId,
    method: 'GET',
    headers: {},
  });
}

export function roleEditApi(params: RoleEditParam) {
  return defHttp.request<RoleListItem>({
    url: Api.roleEditUri,
    method: 'PUT',
    params,
    headers: {},
  });
}

export function roleDeleteApi(roleId: number | string) {
  return defHttp.request<RoleListItem>({
    url: Api.roleEditUri + '/' + roleId,
    method: 'DELETE',
    headers: {},
  });
}

export function roleGetCheckBoxOptionsApi() {
  return defHttp.request<RoleCheckBoxOptionsGetResultModel>({
    url: Api.roleCheckBoxOptionsUri,
    method: 'GET',
    headers: {},
  });
}