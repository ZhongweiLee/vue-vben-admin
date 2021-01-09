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
