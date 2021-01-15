import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: 字典
 */
export type DictTypeListParams = BasicPageParams;

export interface DictTypeListItem {
  dictId: number;
  dictName: string;
  dictType: string;
  status: string;
  createBy: string;
  updataBy: string;
  remark: string;
  createAt: string;
  updateAt: string;
  deleteAt: string;
  dataScope: string;
  params: string;
}

export interface DictTypeAddParam {
  dictName: string;
  dictType: string;
  remark: string;
}

/**
 * @description: 字典
 */
export type DictTypeGetResultModel = BasicFetchResult<DictTypeListItem>;

/**
 * 字典数据
 */
export interface DictDataOptionsItem {
  label: string;
  value: string;
}

/**
 * @description: 字段数据
 */
export type DictDataOptionsGetResultModel = DictDataOptionsItem[];
