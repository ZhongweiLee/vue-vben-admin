import { defHttp } from '/@/utils/http/axios';
import { SysUserListParams, SysUserListGetResultModel } from './model/sysuserModel';

enum Api {
  sysUserListUri = '/sysUser/list',
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
