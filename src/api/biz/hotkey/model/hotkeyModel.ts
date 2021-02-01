import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: APP hotkey
 */
export type AppHotkeyParams = BasicPageParams;

export interface AppHotkeyItem {
  Id: number;
  name: string;
  sort: number;
  createdAt: string;
  updatedAt: string;
  state: number;
}

/**
 * @description: app hotkey list
 */
export type AppHotkeyListGetResultModel = BasicFetchResult<AppHotkeyItem>;
