import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: APP policy
 */
export type AppPolicyParams = BasicPageParams;

export interface AppPolicyItem {
  Id: number;
  privacyPolicyUrl: string;
  termsOfUseUrl: string;
  appDescribe: string;
  state: number;
  createTime: string;
}

/**
 * @description: app policy list
 */
export type AppPolicyListGetResultModel = BasicFetchResult<AppPolicyItem>;
