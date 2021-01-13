import { defHttp } from '/@/utils/http/axios';
import {
  DictDataOptionsGetResultModel,
  DictTypeGetResultModel,
  DictTypeListParams,
} from './model/dictModel';

enum Api {
  dictTypeListUri = '/dict/typelist',
  dictDataOptionsUri = '/dict/datalist/options/',
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

export function dictDataOptionsApi(dictType: string) {
  return defHttp.request<DictDataOptionsGetResultModel>({
    url: Api.dictDataOptionsUri,
    method: 'GET',
    params: dictType,
    headers: {
      ignoreCancelToken: true,
    },
  });
}
