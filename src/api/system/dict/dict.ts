import { defHttp } from '/@/utils/http/axios';
import {
  DictDataAddParam,
  DictDataItem,
  DictDataListGetResultModel,
  DictDataOptionsGetResultModel,
} from './model/dictModel';
import { BasicPageParams } from '../../model/baseModel';

enum Api {
  dictDataOptionsUri = '/dict/options/',
  dictDataListUri = '/dict/data/getDictDataList',
  dictDataUri = '/dict',
  dictDataDeleteUril = '/dict/deleteDictData/',
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

export function dictDataListApi(params: BasicPageParams) {
  return defHttp.request<DictDataListGetResultModel>({
    url: Api.dictDataListUri,
    method: 'GET',
    params: params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}

export function dictDataAddApi(params: DictDataAddParam) {
  return defHttp.request<DictDataItem>({
    url: Api.dictDataUri,
    method: 'POST',
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}

export function dictDataDeleteApi(id: number) {
  return defHttp.request<DictDataItem>({
    url: Api.dictDataDeleteUril + id,
    method: 'DELETE',
    headers: {
      ignoreCancelToken: true,
    },
  });
}
