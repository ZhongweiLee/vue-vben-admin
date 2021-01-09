import { defHttp } from '/@/utils/http/axios';
import { DictTypeGetResultModel, DictTypeListParams } from './model/dictModel';

enum Api {
  dictTypeListUri = '/dict/typelist',
}

/**
 * @description: Get dict type list
 */
export function dictTypeListApi(params: DictTypeListParams) {
  return defHttp.request<DictTypeGetResultModel>({
    url: Api.dictTypeListUri,
    method: 'GET',
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}
