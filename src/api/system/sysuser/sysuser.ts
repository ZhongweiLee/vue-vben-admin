import { defHttp } from '/@/utils/http/axios';
import {
  SysUserListParams,
  SysUserListGetResultModel,
  SysUserListItem,
  SysUserUpdateParams,
  SysUserAddParams,
  SysUserResetPasswordParams,
  SysUserDetail,
  SysUserModifyRoleParam,
} from './model/sysuserModel';

enum Api {
  sysUserDetailUri = '/sysuser/getSysUserById',
  sysUserUpdateUri = '/sysuser',
  sysUserChangeStatus = '/sysuser/changeStatus',
  sysUserModifyRole = '/sysuser/modifySysUserRole',
  sysUserRestPasswordUri = '/sysuser/resetPassword',
  sysUserListUri = '/sysuser/sysUserList',
}

/**
 * @description: 系统用户列表
 */
export function sysUserListApi(params: SysUserListParams) {
  return defHttp.request<SysUserListGetResultModel>({
    url: Api.sysUserListUri,
    method: 'GET',
    params,
    headers: {},
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
    headers: {},
  });
}

/**
 *
 * @param data 添加用户
 */
export function sysUserAddApi(params: SysUserAddParams) {
  return defHttp.request<SysUserListItem>({
    url: Api.sysUserUpdateUri,
    method: 'POST',
    params: params,
    headers: {},
  });
}

/**
 *
 * @param data 重置密码
 */
export function sysUserResetPasswordApi(params: SysUserResetPasswordParams) {
  return defHttp.request<SysUserListItem>({
    url: Api.sysUserRestPasswordUri,
    method: 'PUT',
    params: params,
    headers: {},
  });
}

/**
 *
 * @param params 更改用户状态 停用or启用
 */
export function changeSysUserStatuApi(params: any) {
  return defHttp.request<SysUserListItem>({
    url: Api.sysUserChangeStatus,
    method: 'DELETE',
    params: params,
    headers: {},
  });
}
/**
 *
 * @param userId 用户详情包含角色IDs
 * @returns
 */
export function sysUserGetDetailApi(userId: string | number) {
  return defHttp.request<SysUserDetail>({
    url: Api.sysUserDetailUri + '?userId=' + userId,
    method: 'GET',
    headers: {},
  });
}

export function sysUserModifyRoleApi(params: SysUserModifyRoleParam) {
  return defHttp.request<SysUserDetail>({
    url: Api.sysUserModifyRole,
    method: 'PUT',
    params: params,
    headers: {},
  });
}
