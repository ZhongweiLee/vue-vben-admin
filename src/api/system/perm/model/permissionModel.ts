import { BasicPageParams } from '/@/api/model/baseModel';

export type PermissionListParams = BasicPageParams;

export interface PermissionItem {
  id: number;
  name: string;
  code: string;
  parentId: number;
  status: string;
  remark: string;
  type: string;
  createBy: string;
  updateBy: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  children?: PermissionItem[];
}

export type PermissionListGetResultModel = PermissionItem[];

export interface PermissionAddParam {
  name: string;
  code: string;
  parentId: string;
  remark: string;
  type: string;
}

export interface PermissionEditParam {
  id: string;
  name: string;
  code: string;
  parentId: string;
  remark: string;
  type: string;
}

export interface PermissionTreeOption {
  title: string;
  key: string;
  children?: PermissionTreeOption[];
}

export type PermissionOptionsTreeGetResultModel = PermissionTreeOption[];
