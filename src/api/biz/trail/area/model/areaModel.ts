import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: 线路目的地
 */
export type TrailAreaParams = BasicPageParams;

export interface TrailAreaItem {
  Id: number;
  name: string;
  pid: number;
  sort: number;
  createdAt: string;
  updatedAt: string;
  state: number;
  children?: TrailAreaItem[];
}

/**
 * @description: trail area list
 */
export type TrailAreaListGetResultModel = BasicFetchResult<TrailAreaItem>;
