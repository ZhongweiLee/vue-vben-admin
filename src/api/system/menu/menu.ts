import { defHttp } from '/@/utils/http/axios';
import {
  MenuAddParam,
  MenuDirOptionsGetResultModel,
  MenuEditParam,
  MenuListGetResultModel,
  MenuListItem,
  MenuListParams,
} from './model/menuModel';

enum Api {
  menuListUri = '/menu/getMenuList',
  menuAddUri = '/menu/addMenu',
  menuDirOptionUri = '/menu/getMenuDirOption',
  menuEidtUri = '/menu/editMenu',
  menuDetailUri = '/menu/getMenuById',
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
export function menuGetDirOptionApi() {
  return defHttp.request<MenuDirOptionsGetResultModel>({
    url: Api.menuDirOptionUri,
    method: 'GET',
    headers: {
      ignoreCancelToken: true,
    },
  });
}

export function menuEditApi(params: MenuEditParam) {
  return defHttp.request<MenuListItem>({
    url: Api.menuEidtUri,
    method: 'PUT',
    params: params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}

export function menuGetByIdApi(id: number | string | any) {
  return defHttp.request<MenuListItem>({
    url: Api.menuDetailUri + '?id=' + id,
    method: 'GET',
    headers: {
      ignoreCancelToken: true,
    },
  });
}
