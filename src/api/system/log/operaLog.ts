import { defHttp } from '/@/utils/http/axios';
import { OperaLogParams, OperaLogListGetResultModel } from './model/operaLogModel';

enum Api {
  OperaLogList = '/syslog/operaLogList',
}

/**
 * @description: Get opera log list
 */
export function operaLogListApi(params: OperaLogParams) {
  return defHttp.request<OperaLogListGetResultModel>({
    url: Api.OperaLogList,
    method: 'GET',
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}
