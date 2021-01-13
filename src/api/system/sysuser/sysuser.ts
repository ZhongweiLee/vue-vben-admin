import { defHttp } from '/@/utils/http/axios';
import {
  SysUserListParams,
  SysUserListGetResultModel,
  SysUserListItem,
  SysUserUpdateParams,
} from './model/sysuserModel';

enum Api {
  sysUserListUri = '/sysUser/list',
  sysUserUpdateUri = '/sysUser',
  sysUserChangeStatus = '/sysUser/changeStatus',
}

/**
 * @description: 系统用户列表
 */
export function sysUserListApi(params: SysUserListParams) {
  return defHttp.request<SysUserListGetResultModel>({
    url: Api.sysUserListUri,
    method: 'GET',
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}
/**
 *
 * @param data 修改用户
 */
export function sysUserUpdateApi(params: SysUserUpdateParams) {
  return defHttp.request<SysUserListItem>({
    url: Api.sysUserUpdateUri,
    method: 'PUT',
    params: params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}
/**
 *
 * @param params 更改用户状态 停用or启用
 */
export function changeSysUserStatuApi(params: any) {
  return defHttp.request<SysUserListItem>({
    url: Api.sysUserChangeStatus,
    method: 'PUT',
    params: params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}
