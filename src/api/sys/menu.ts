import { defHttp } from '/@/utils/http/axios';

enum Api {
  GetMenuListById = '/user/getLoginUserMenuList',
}

/**
 * @description: Get user menu based on id
 */
export function getMenuList() {
  return defHttp.request({
    url: Api.GetMenuListById,
    method: 'GET',
  });
}
