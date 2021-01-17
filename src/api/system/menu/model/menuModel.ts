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
  metaHidemenu: boolean;
  metaHideTab: boolean;
  MetaCurrentActiveMenu: string;
  children?: MenuListItem[];
  parentName: string;
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
}
