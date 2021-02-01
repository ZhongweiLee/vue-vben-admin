import { defHttp } from '/@/utils/http/axios';
import { TrailAreaListGetResultModel, TrailAreaParams } from './model/areaModel';

enum Api {
  trailAreaListUri = '/trail/area/getAreaList',
}

/**
 * @description: Get trail area list
 */
export function trailAreaListApi(params: TrailAreaParams) {
  return defHttp.request<TrailAreaListGetResultModel>({
    url: Api.trailAreaListUri,
    method: 'GET',
    params,
    headers: {},
  });
}
