import { BasicFetchResult } from '/@/api/model/baseModel';

export interface DictDataAddParam {
  dictType: string;
  dictLabel: string;
  dictValue: string;
  remark: string;
}

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

export interface DictDataItem {
  id: number;
  dictSort: number;
  dictLabel: string;
  dictValue: string;
  dictType: string;
  status: string;
  remark: string;
  createAt: string;
  updateAt: string;
  deleteAt: string;
}

export type DictDataListGetResultModel = BasicFetchResult<DictDataItem>;
