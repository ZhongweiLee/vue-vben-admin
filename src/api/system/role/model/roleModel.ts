import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: 角色管理
 */
export type RoleListParams = BasicPageParams;

export interface RoleListItem {
  roleId: number;
  roleName: string;
  roleKey: string;
  roleSort: number;
  remark: string;
  status: string;
  createdAt: string;
  admin: boolean;
}

/**
 * @description: 角色列表
 */
export type RoleListGetResultModel = BasicFetchResult<RoleListItem>;

export interface RoleAddParam {
  roleName: string;
  roleKey: string;
  roleSort: string;
  remark: string;
  admin: string;
  menus: string;
}

export interface RoleDetail {
  roleId: number;
  roleName: string;
  status: string;
  roleKey: string;
  roleSort: number;
  remark: string;
  admin: boolean;
  menuIds: number[];
}

export interface RoleEditParam {
  roleId: string;
  roleKey: string;
  roleSort: string;
  remark: string;
  admin: string;
  menus: string;
}
