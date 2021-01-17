import { defHttp } from '/@/utils/http/axios';
import {
  SysUserListParams,
  SysUserListGetResultModel,
  SysUserListItem,
  SysUserUpdateParams,
  SysUserAddParams,
  SysUserResetPasswordParams,
} from './model/sysuserModel';

enum Api {
  sysUserListUri = '/sysuser/sysUserlist',
  sysUserUpdateUri = '/sysuser',
  sysUserChangeStatus = '/sysuser/changeStatus',
  sysUserRestPasswordUri = '/sysuser/resetPassword',
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
 * @param data 添加用户
 */
export function sysUserAddApi(params: SysUserAddParams) {
  return defHttp.request<SysUserListItem>({
    url: Api.sysUserUpdateUri,
    method: 'POST',
    params: params,
    headers: {
      ignoreCancelToken: true,
    },
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
    method: 'DELETE',
    params: params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}