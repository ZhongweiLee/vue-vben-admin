import { defHttp } from '/@/utils/http/axios';
import { TrailTabListGetResultModel, TrailTabParams } from './model/tabModel';

enum Api {
  trailTabListUri = '/trail/tab/getTabList',
}

/**
 * @description: Get trail tab list
 */
export function trailTabListApi(params: TrailTabParams) {
  return defHttp.request<TrailTabListGetResultModel>({
    url: Api.trailTabListUri,
    method: 'GET',
    params,
    headers: {},
  });
}
