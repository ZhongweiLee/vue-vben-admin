import { defHttp } from '/@/utils/http/axios';
import { OperaLogParams, OperaLogListGetResultModel } from './model/operaLogModel';

enum Api {
  operaLogListUri = '/syslog/operaLogList',
}

/**
 * @description: Get opera log list
 */
export function operaLogListApi(params: OperaLogParams) {
  return defHttp.request<OperaLogListGetResultModel>({
    url: Api.operaLogListUri,
    method: 'GET',
    params,
    headers: {},
  });
}
