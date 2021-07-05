import { defHttp } from '/@/utils/http/axios';
import {
  AddTagTrailParam,
  AddTrailParam,
  AuditParam,
  TrailDetail,
  TrailItem,
  TrailListGetResultModel,
  TrailParams,
} from './model/trailModel';

enum Api {
  trailListUri = '/trail/getTrailList',
  detailUri = '/trail/detail',
  addUri = '/trail/addTrail',
  auidtUri = '/trail/auditTrail',
  tagTrailUri = '/trail/tagTrail',
}

/**
 * @description: Get trail list
 */
export function trailListApi(params: TrailParams) {
  return defHttp.request<TrailListGetResultModel>({
    url: Api.trailListUri,
    method: 'GET',
    params,
    headers: {},
  });
}

export function trailDetailApi(id: number | string) {
  return defHttp.request<TrailDetail>({
    url: Api.detailUri + '?id=' + id,
    method: 'GET',
    headers: {},
  });
}

export function trailAddApi(params: AddTrailParam) {
  return defHttp.request<TrailItem>({
    url: Api.addUri,
    method: 'POST',
    params,
    headers: {},
  });
}

export function auditTrailApi(params: AuditParam) {
  return defHttp.request<AuditParam>({
    url: Api.auidtUri,
    method: 'POST',
    params,
    headers: {},
  });
}

export function tagTrailApi(params: AddTagTrailParam) {
  return defHttp.request<AddTagTrailParam>({
    url: Api.tagTrailUri,
    method: 'POST',
    params,
    headers: {},
  });
}
