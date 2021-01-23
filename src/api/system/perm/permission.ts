import {
  PermissionAddParam,
  PermissionEditParam,
  PermissionItem,
  PermissionListGetResultModel,
  PermissionListParams,
  PermissionOptionsTreeGetResultModel,
} from './model/permissionModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  permissionAddUri = '/permission/addPermission',
  permissionEidtUri = '/permission/editPermission',
  permissionDetailUri = '/permission/getPermissionById',
  permissionListUri = '/permission/getPermissionList',
  permissionOptionTreeUri = '/permission/tree',
}

/**
 * @description: Get 权限列表
 */
export function permissionListApi(params: PermissionListParams) {
  return defHttp.request<PermissionListGetResultModel>({
    url: Api.permissionListUri,
    method: 'GET',
    params,
    headers: {},
  });
}

export function permissionAddApi(params: PermissionAddParam) {
  return defHttp.request<PermissionItem>({
    url: Api.permissionAddUri,
    method: 'POST',
    params: params,
    headers: {},
  });
}

export function permissionEditApi(params: PermissionEditParam) {
  return defHttp.request<PermissionItem>({
    url: Api.permissionEidtUri,
    method: 'PUT',
    params: params,
    headers: {},
  });
}

export function permissionGetByIdApi(id: number | string | any) {
  return defHttp.request<PermissionItem>({
    url: Api.permissionDetailUri + '?id=' + id,
    method: 'GET',
    headers: {},
  });
}

export function menuOptionTreeApi() {
  return defHttp.request<PermissionOptionsTreeGetResultModel>({
    url: Api.permissionOptionTreeUri,
    method: 'GET',
    headers: {},
  });
}
