import { defHttp } from '/@/utils/http/axios';
import {
  PostListGetResultModel,
  PostListParams,
  PostOptionsGetResultModel,
} from './model/postModel';

enum Api {
  postListUri = '/post/getPostList',
  postOptionUri = '/post/getPostOptions',
}

/**
 * @description: 岗位列表
 */
export function postListApi(params: PostListParams) {
  return defHttp.request<PostListGetResultModel>({
    url: Api.postListUri,
    method: 'GET',
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}
/**
 * 岗位下拉
 */
export function postOptionsApi() {
  return defHttp.request<PostOptionsGetResultModel>({
    url: Api.postOptionUri,
    method: 'GET',
    headers: {
      ignoreCancelToken: true,
    },
  });
}
