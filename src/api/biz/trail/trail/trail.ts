import { defHttp } from '/@/utils/http/axios';
import { TrailDetail, TrailListGetResultModel, TrailParams } from './model/trailModel';

enum Api {
  trailListUri = '/trail/getTrailList',
  detailUri = '/trail/detail',
}

/**
 * @description: Get trail list
 */
export function trailListApi(params: TrailParams) {
  return defHttp.request<TrailListGetResultModel>({
    url: Api.trailListUri,
    method: 'GET',
    params,
    headers: {},
  });
}

export function trailDetailApi(id: number | string) {
  return defHttp.request<TrailDetail>({
    url: Api.detailUri + '?id=' + id,
    method: 'GET',
    headers: {},
  });
}
