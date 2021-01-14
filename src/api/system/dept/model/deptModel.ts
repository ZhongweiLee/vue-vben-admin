import { BasicPageParams } from '/@/api/model/baseModel';
/**
 * @description: 部门
 */
export type DeptListParams = BasicPageParams;

export interface DeptListItem {
  deptId: number;
  parentId: number;
  deptName: string;
  sort: number;
  leader: string;
  status: string;
  deptPath: string;
  phone: string;
  email: string;
  children?: DeptListItem[];
}

/**
 * @description: 部门
 */
export type DeptListGetResultModel = DeptListItem[];

/**
 * 部门下拉数据
 */
export interface DeptOptionsItem {
  label: string;
  value: string;
  children?: DeptOptionsItem[];
}

/**
 * @description: 部门下拉数据
 */
export type DeptOptionsGetResultModel = DeptOptionsItem[];
