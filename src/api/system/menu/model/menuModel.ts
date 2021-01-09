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
  state: number;
  createTime: string;
  children?: MenuListItem[];
}

/**
 * @description: 菜单管理
 */
export type MenuListGetResultModel = MenuListItem[];
