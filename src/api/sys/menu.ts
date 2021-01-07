import { defHttp } from '/@/utils/http/axios';

import { getMenuListByIdParamsResultModel } from './model/menuModel';

enum Api {
  GetMenuListById = '/user/getLoginUserMenuList',
}

/**
 * @description: Get user menu based on id
 */
export function getMenuListById() {
  return defHttp.request<getMenuListByIdParamsResultModel>({
    url: Api.GetMenuListById,
    method: 'GET',
  });
}
