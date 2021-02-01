import { defHttp } from '/@/utils/http/axios';
import { AppPolicyParams, AppPolicyListGetResultModel } from './model/policyModel';

enum Api {
  appPolicyListUri = '/trail/privacy/getPrivacyList',
}

/**
 * @description: Get policy list
 */
export function appPolicyListApi(params: AppPolicyParams) {
  return defHttp.request<AppPolicyListGetResultModel>({
    url: Api.appPolicyListUri,
    method: 'GET',
    params,
    headers: {},
  });
}
