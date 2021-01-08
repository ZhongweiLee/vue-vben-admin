import { defHttp } from '/@/utils/http/axios';
import { DictTypeGetResultModel, DictTypeListItem } from './model/dictModel';

enum Api {
  dictTypeListApi = '/dict/typelist',
}

/**
 * @description: Get dict type list
 */
export function dictTypeListApi(params: DictTypeListItem) {
  return defHttp.request<DictTypeGetResultModel>({
    url: Api.dictTypeListApi,
    method: 'GET',
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}
