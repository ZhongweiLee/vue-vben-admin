import { defHttp } from '/@/utils/http/axios';
import { MenuListGetResultModel, MenuListParams } from './model/menuModel';

enum Api {
  menuListUri = '/menu/list',
}

/**
 * @description: Get 菜单列表
 */
export function menuListApi(params: MenuListParams) {
  return defHttp.request<MenuListGetResultModel>({
    url: Api.menuListUri,
    method: 'GET',
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}
