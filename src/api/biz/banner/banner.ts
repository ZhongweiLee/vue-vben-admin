import { defHttp } from '/@/utils/http/axios';
import { AppBannerParams, AppBannerListGetResultModel } from './model/bannerModel';

enum Api {
  appBannerListUri = '/trail/banner/getBannerList',
}

/**
 * @description: Get banner list
 */
export function appBannerListApi(params: AppBannerParams) {
  return defHttp.request<AppBannerListGetResultModel>({
    url: Api.appBannerListUri,
    method: 'GET',
    params,
    headers: {},
  });
}
