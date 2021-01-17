import { defHttp } from '/@/utils/http/axios';
import {
  MenuAddParam,
  MenuListGetResultModel,
  MenuListItem,
  MenuListParams,
} from './model/menuModel';

enum Api {
  menuListUri = '/menu/list',
  menuAddUri = '/menu/addMenu',
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

export function menuAddApi(params: MenuAddParam) {
  return defHttp.request<MenuListItem>({
    url: Api.menuAddUri,
    method: 'POST',
    params: params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}
