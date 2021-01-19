import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: 系统用户管理
 */
export type SysUserListParams = BasicPageParams;

export interface SysUserListItem {
  userId: number;
  nickname: string;
  phone: string;
  roleId: number;
  avatar: string;
  sex: string;
  email: string;
  username: string;
  status: string;
  createdAt: string;
  remark: string;
  deptName: string;
  postId: number;
}

export interface SysUserUpdateParams {
  userId: string;
  phone: string;
  username: string;
  email: string;
  nickname: string;
  postId: string;
  remark: string;
  sex: string;
  deptId: string;
}

export interface SysUserAddParams {
  password: string;
  phone: string;
  username: string;
  email: string;
  nickname: string;
  postId: string;
  remark: string;
  sex: string;
  deptId: string;
}

export interface SysUserResetPasswordParams {
  userId: string;
  password: string;
}

/**
 * @description: 系统用户列表
 */
export type SysUserListGetResultModel = BasicFetchResult<SysUserListItem>;

export interface SysUserDetail {
  userId: number;
  nickname: string;
  phone: string;
  roleId: number;
  avatar: string;
  sex: string;
  email: string;
  username: string;
  status: string;
  createdAt: string;
  remark: string;
  deptName: string;
  postId: number;
  roleIds: number[];
}

export interface SysUserModifyRoleParam {
  userId: string;
  roleIds: string[];
}
