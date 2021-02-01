import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: APP崩溃日志
 */
export type AppLogParams = BasicPageParams;

export interface AppLogListItem {
  Id: number;
  brand: string;
  model: string;
  version: string;
  appVersion: string;
  device: string;
  errorLog: string;
  createTime: string;
  userId: number;
}

/**
 * @description: app log list
 */
export type AppLogListGetResultModel = BasicFetchResult<AppLogListItem>;
