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
}

/**
 * @description: 系统用户列表
 */
export type SysUserListGetResultModel = BasicFetchResult<SysUserListItem>;
