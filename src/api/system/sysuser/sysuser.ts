import { defHttp } from '/@/utils/http/axios';
import {
  SysUserListParams,
  SysUserListGetResultModel,
  SysUserListItem,
} from './model/sysuserModel';

enum Api {
  sysUserListUri = '/sysUser/list',
  sysUserUpdateUri = '/sysUser',
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
export function sysUserUpdateApi(params: any) {
  return defHttp.request<SysUserListItem>({
    url: Api.sysUserUpdateUri,
    method: 'PUT',
    params: params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}
