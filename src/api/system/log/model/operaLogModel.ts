import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: 操作日志
 */
export type OperaLogParams = BasicPageParams;

export interface OperaLogListItem {
  ID: number;
  title: string;
  method: string;
  operUrl: string;
  operIp: string;
  latencyTime: string;
  userAgent: string;
  operTime: string;
  status: string;
}

/**
 * @description: opera log list
 */
export type OperaLogListGetResultModel = BasicFetchResult<OperaLogListItem>;
