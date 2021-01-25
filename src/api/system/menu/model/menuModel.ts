import { BasicPageParams } from '/@/api/model/baseModel';
/**
 * @description: 菜单管理
 */
export type MenuListParams = BasicPageParams;

export interface MenuListItem {
  id: number;
  name: string;
  path: string;
  redirect: string;
  component: string;
  metaIcon: string;
  metaTitle: string;
  sort: number;
  parentId: number;
  status: string;
  createdAt: string;
  metaHideMenu: boolean;
  metaHideTab: boolean;
  MetaCurrentActiveMenu: string;
  children?: MenuListItem[];
}

/**
 * @description: 菜单管理
 */
export type MenuListGetResultModel = MenuListItem[];

export interface MenuAddParam {
  name: string;
  path: string;
  metaTitle: string;
  component: string;
  redirect: string;
  metaIcon: string;
  sort: string;
  parentId: string;
  isRoot: string;
  menuTye: string;
  metaHideMenu: string;
}

export interface MenuDirOptionsItem {
  label: string;
  value: string;
}

export type MenuDirOptionsGetResultModel = MenuDirOptionsItem[];

export interface MenuEditParam {
  id: string;
  path: string;
  metaTitle: string;
  component: string;
  redirect: string;
  metaIcon: string;
  sort: string;
  parentId: string;
  menuTye: string;
  metaHideMenu: string;
}

export interface MenuTreeOption {
  title: string;
  key: string;
  children?: MenuTreeOption[];
}

export type MenuOptionsTreeGetResultModel = MenuTreeOption[];
