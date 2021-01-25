import { defHttp } from '/@/utils/http/axios';
import {
  GetAccountInfoModel,
  UpdateBaseInfoParam,
  UpdatePasswordParam,
} from './model/accountModel';

enum Api {
  profileUri = '/user/profile',
  updateBaseInfoUri = '/user/updateBaseInfo',
  updatePasswordUri = '/user/pwd',
}

// Get personal center-basic settings
export function accountInfoApi() {
  return defHttp.request<GetAccountInfoModel>({
    url: Api.profileUri,
    method: 'GET',
  });
}

export function accountUpdateBaseInfoApi(params: UpdateBaseInfoParam) {
  return defHttp.request<GetAccountInfoModel>({
    url: Api.updateBaseInfoUri,
    method: 'PUT',
    params: params,
  });
}

export function accountUpdatePasswordApi(params: UpdatePasswordParam) {
  return defHttp.request<GetAccountInfoModel>({
    url: Api.updatePasswordUri,
    method: 'PUT',
    params: params,
  });
}
