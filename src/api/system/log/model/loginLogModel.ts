import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: 操作日志
 */
export type LoginLogParams = BasicPageParams;

export interface LoginLogListItem {
  ID: number;
  username: string;
  status: string;
  ipaddr: string;
  browser: string;
  os: string;
  platform: string;
  remark: string;
  msg: string;
  loginTime: string;
}

/**
 * @description: opera log list
 */
export type LoginLogListGetResultModel = BasicFetchResult<LoginLogListItem>;
