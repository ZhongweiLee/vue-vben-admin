import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: 岗位管理
 */
export type PostListParams = BasicPageParams;

export interface PostListItem {
  postId: number;
  postName: string;
  postCode: string;
  sort: number;
  remark: string;
  status: string;
  createAt: string;
}

/**
 * @description: 岗位列表
 */
export type PostListGetResultModel = BasicFetchResult<PostListItem>;

/**
 * 岗位下拉数据
 */
export interface PostOptionsItem {
  label: string;
  value: string;
}

/**
 * @description: 岗位下拉数据
 */
export type PostOptionsGetResultModel = PostOptionsItem[];
