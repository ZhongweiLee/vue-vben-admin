import { defHttp } from '/@/utils/http/axios';
import { TrailNaviListGetResultModel, TrailNaviParams } from './model/naviModel';

enum Api {
  trailNaviListUri = '/trail/navi/getNaviList',
}

/**
 * @description: Get trail navi list
 */
export function trailNaviListApi(params: TrailNaviParams) {
  return defHttp.request<TrailNaviListGetResultModel>({
    url: Api.trailNaviListUri,
    method: 'GET',
    params,
    headers: {},
  });
}
