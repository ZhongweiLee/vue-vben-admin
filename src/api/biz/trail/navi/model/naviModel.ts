import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: 线路分类
 */
export type TrailNaviParams = BasicPageParams;

export interface TrailNaviItem {
  id: number;
  pid: number;
  trailId: number;
  envelopePic: string;
  sort: number;
  state: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  children?: TrailNaviItem[];
}

/**
 * @description: trail navi list
 */
export type TrailNaviListGetResultModel = BasicFetchResult<TrailNaviItem>;
