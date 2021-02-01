import { defHttp } from '/@/utils/http/axios';
import { AppHotkeyParams, AppHotkeyListGetResultModel } from './model/hotkeyModel';

enum Api {
  appHotkeyListUri = '/trail/hotkey/getHotkeyList',
}

/**
 * @description: Get hotkey list
 */
export function appHotkeyListApi(params: AppHotkeyParams) {
  return defHttp.request<AppHotkeyListGetResultModel>({
    url: Api.appHotkeyListUri,
    method: 'GET',
    params,
    headers: {},
  });
}
