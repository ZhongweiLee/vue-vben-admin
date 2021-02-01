import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: APP banner
 */
export type AppBannerParams = BasicPageParams;

export interface AppBannerItem {
  Id: number;
  title: string;
  type: number;
  imagePath: string;
  remark: string;
  isVisible: boolean;
  sort: number;
  createdAt: string;
  updatedAt: string;
  state: number;
  operator: string;
  effectTime: string;
  expiresTime: string;
  url: string;
}

/**
 * @description: app banner list
 */
export type AppBannerListGetResultModel = BasicFetchResult<AppBannerItem>;
