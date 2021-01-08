import { defHttp } from '/@/utils/http/axios';
import { LoginLogParams, LoginLogListGetResultModel } from './model/loginLogModel';

enum Api {
  LoginLogList = '/syslog/loginLogList',
}

/**
 * @description: Get login log list
 */
export function loginLogListApi(params: LoginLogParams) {
  return defHttp.request<LoginLogListGetResultModel>({
    url: Api.LoginLogList,
    method: 'GET',
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}
