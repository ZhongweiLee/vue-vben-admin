import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: 线路分类
 */
export type TrailTabParams = BasicPageParams;

export interface TrailTabItem {
  id: number;
  name: string;
  sort: number;
  createdAt: string;
  updatedAt: string;
  state: number;
}

/**
 * @description: trail tab list
 */
export type TrailTabListGetResultModel = BasicFetchResult<TrailTabItem>;
