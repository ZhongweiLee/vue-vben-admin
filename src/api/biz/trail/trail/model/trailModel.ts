import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: 线路分类
 */

export interface TrailParams extends BasicPageParams {
  title: string;
  state: string;
}

export interface TrailItem {
  id: number;
  shortName: string;
  envelopePic: string;
  itemPic: string;
  title: string;
  content: string;
  gisImageUrl: string;
  trailNoteUrl: string;
  videoUrl: string;
  createUserId: number;
  createTime: string;
  updateTime: string;
  state: number;
  auditState: number;
  auditUserId: number;
  auditTime: string;
  auditRemark: string;
  hardship: number;
  days: string;
  province: string;
  destination: string;
  ticketFree: boolean;
  maximumAltitude: number;
  sceneryStar: number;
  maturity: number;
  km: string;
  totalMoney: string;
  needMountainGuide: boolean;
  altitudeImageUrl: string;
  isoheightImageUrl: string;
}

export interface TrailDetail extends TrailItem {
  trailId: number;
  waring: string;
  campInfo: string;
  waterInfo: string;
  trafficInfo: string;
  packageInfo: string;
  horseInfo: string;
  mountainGuideInfo: string;
  localGuideInfo: string;
  foodInfo: string;
  mobileSignalInfo: string;
  riverInfo: string;
  gpsTrace: string;
  trouble: string;
  feeInfo: string;
}

export interface AddTrailBaseInfoParam {
  content: string;
  days: string;
  destination: string;
  hardship: number;
  km: string;
  maturity: number;
  maximumAltitude: string;
  needMountainGuide: string;
  province: string;
  sceneryStar: number;
  shortName: string;
  ticketFree: string;
  title: string;
  totalMoney: string;
}
export interface AddTrailImageInfoParam {
  itemPic: string;
  altitudeImageUrl: string;
  envelopePic: string;
  gisImageUrl: string;
  isoheightImageUrl: string;
  trailNoteUrl: string;
}

export interface AddTrailInfoParam {
  campInfo: string;
  feeInfo: string;
  foodInfo: string;
  horseInfo: string;
  localGuideInfo: string;
  mobileSignalInfo: string;
  mountainGuideInfo: string;
  packageInfo: string;
  riverInfo: string;
  trafficInfo: string;
  trouble: string;
  waring: string;
  waterInfo: string;
}
export interface AddTrailParam extends AddTrailBaseInfoParam, AddTrailImageInfoParam {
  textInfo: AddTrailInfoParam;
}

export interface AuditParam {
  trailId: number;
  auditState: number | string;
  auditRemark: string;
}

/**
 * @description: trail list
 */
export type TrailListGetResultModel = BasicFetchResult<TrailItem[]>;

export function getStateLabel(state: number): string {
  if (state == 1) {
    return '已发布';
  } else if (state == 2) {
    return '草稿';
  } else if (state == 3) {
    return '用户删除';
  } else if (state == 4) {
    return '平台删除';
  }
  return '';
}

export function getAuditStateLabel(auditState: number | string): string {
  if (auditState == '0') {
    return '待审核';
  } else if (auditState == '1') {
    return '审核通过';
  } else if (auditState == '2') {
    return '驳回';
  }
  return '';
}

export type TrailDetailResult = TrailDetail;
