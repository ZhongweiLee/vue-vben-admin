import { defHttp } from '/@/utils/http/axios';
import { AppLogParams, AppLogListGetResultModel } from './model/applogModel';

enum Api {
  appLogListUri = '/trail/log/getAppErrorLogList',
}

/**
 * @description: Get login log list
 */
export function appLogListApi(params: AppLogParams) {
  return defHttp.request<AppLogListGetResultModel>({
    url: Api.appLogListUri,
    method: 'GET',
    params,
    headers: {},
  });
}
