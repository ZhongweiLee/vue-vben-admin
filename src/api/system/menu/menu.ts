import { defHttp } from '/@/utils/http/axios';
import {
  MenuAddParam,
  MenuDirOptionsGetResultModel,
  MenuEditParam,
  MenuListGetResultModel,
  MenuListItem,
  MenuListParams,
  MenuOptionsTreeGetResultModel,
} from './model/menuModel';

enum Api {
  menuAddUri = '/menu/addMenu',
  menuEidtUri = '/menu/editMenu',
  menuDetailUri = '/menu/getMenuById',
  menuDirOptionUri = '/menu/getMenuDirOption',
  menuListUri = '/menu/getMenuList',
  menuOptionTreeUri = '/menu/tree',
}

/**
 * @description: Get 菜单列表
 */
export function menuListApi(params: MenuListParams) {
  return defHttp.request<MenuListGetResultModel>({
    url: Api.menuListUri,
    method: 'GET',
    params,
    headers: {},
  });
}

export function menuAddApi(params: MenuAddParam) {
  return defHttp.request<MenuListItem>({
    url: Api.menuAddUri,
    method: 'POST',
    params: params,
    headers: {},
  });
}
export function menuGetDirOptionApi() {
  return defHttp.request<MenuDirOptionsGetResultModel>({
    url: Api.menuDirOptionUri,
    method: 'GET',
    headers: {},
  });
}

export function menuEditApi(params: MenuEditParam) {
  return defHttp.request<MenuListItem>({
    url: Api.menuEidtUri,
    method: 'PUT',
    params: params,
    headers: {},
  });
}

export function menuGetByIdApi(id: number | string | any) {
  return defHttp.request<MenuListItem>({
    url: Api.menuDetailUri + '?id=' + id,
    method: 'GET',
    headers: {},
  });
}

export function menuOptionTreeApi() {
  return defHttp.request<MenuOptionsTreeGetResultModel>({
    url: Api.menuOptionTreeUri,
    method: 'GET',
    headers: {},
  });
}
