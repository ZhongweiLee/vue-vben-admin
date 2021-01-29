/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  username: string;
  password: string;
}

/**
 * @description: Get user information
 */
export interface GetUserInfoByUserIdParams {
  userId: string | number;
}

export type RoleInfo = string[];

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  //userId: string | number;
  token: string;
  expire: string;
  //role: RoleInfo;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  role: RoleInfo;
  // 用户id
  userId: string | number;
  // 用户名
  username: string;
  // 真实名字
  nickname: string;
  //头像
  avatar: string;

  permissions: string[];
}
