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
  feeInfo: string;
  ticketFree: boolean;
  maximumAltitude: number;
  sceneryStar: number;
  maturity: number;
  km: string;
  totalMoney: string;
}

export interface TrailDetail extends TrailItem {
  trailId: number;
  waring: string;
  altitudeImageURL: string;
  isoheightImageURL: string;
  campInfo: string;
  waterInfo: string;
  trafficInfo: string;
  packageInfo: string;
  horseInfo: string;
  needMountainGuide: boolean;
  mountainGuideInfo: string;
  localGuideInfo: string;
  foodInfo: string;
  mobileSignalInfo: string;
  riverInfo: string;
  gpsTrace: string;
  trouble: string;
}

/**
 * @description: trail list
 */
export type TrailListGetResultModel = BasicFetchResult<TrailItem[]>;

export function getStateLabel(state: number): string {
  if (state == 0) {
    return '删除';
  } else if (state == 1) {
    return '已发布';
  } else if (state == 2) {
    return '草稿';
  } else if (state == 3) {
    return '用户删除';
  } else if (state == 4) {
    return '待审核';
  } else if (state == 5) {
    return '审核不通过';
  } else if (state == 6) {
    return '平台下架';
  }
  return '';
}

export type TrailDetailResult = TrailDetail;
