import { defHttp } from '/@/utils/http/axios';
import {
  LoginParams,
  LoginResultModel,
  GetUserInfoByUserIdParams,
  GetUserInfoModel,
} from './model/userModel';
import { ErrorMessageMode } from '/@/utils/http/axios/types';

enum Api {
  Login = '/login',
  GetUserInfo = '/user/getLoginUserInfo',
  GetPermCodeByUserId = '/getPermCodeByUserId',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.request<LoginResultModel>(
    {
      url: Api.Login,
      method: 'POST',
      params,
    },
    {
      errorMessageMode: mode,
    }
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.request<GetUserInfoModel>({
    url: Api.GetUserInfo,
    method: 'GET',
  });
}

export function getPermCodeByUserId(params: GetUserInfoByUserIdParams) {
  return defHttp.request<string[]>({
    url: Api.GetPermCodeByUserId,
    method: 'GET',
    params,
  });
}
