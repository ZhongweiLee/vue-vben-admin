import { defHttp } from '/@/utils/http/axios';
import {
  DictDataOptionsGetResultModel,
  DictTypeAddParam,
  DictTypeGetResultModel,
  DictTypeListItem,
  DictTypeListParams,
} from './model/dictModel';

enum Api {
  dictTypeListUri = '/dict/typelist',
  dictDataOptionsUri = '/dict/datalist/options/',
  dictTypeUri = '/dict/type/',
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

export function dictTypeAddApi(params: DictTypeAddParam) {
  return defHttp.request<DictTypeListItem>({
    url: Api.dictTypeUri,
    method: 'POST',
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}

export function dictTypeDeleteApi(dictId: number) {
  return defHttp.request<DictTypeListItem>({
    url: Api.dictTypeUri + dictId,
    method: 'DELETE',
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
