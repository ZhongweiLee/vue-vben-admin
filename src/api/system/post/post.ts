import { defHttp } from '/@/utils/http/axios';
import {
  PostAddParam,
  PostListGetResultModel,
  PostListItem,
  PostListParams,
  PostOptionsGetResultModel,
} from './model/postModel';

enum Api {
  postListUri = '/post/getPostList',
  postOptionUri = '/post/getPostOptions',
  postUri = '/post',
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

export function updatePost(params: any) {
  return defHttp.request<PostListItem>({
    url: Api.postUri,
    method: 'PUT',
    params: params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}

export function deletePost(postId: number) {
  return defHttp.request<PostListItem>({
    url: Api.postUri + '/' + postId,
    method: 'DELETE',
    headers: {
      ignoreCancelToken: true,
    },
  });
}
export function postAddApi(params: PostAddParam) {
  return defHttp.request<PostListItem>({
    url: Api.postUri,
    method: 'POST',
    params: params,
    headers: {
      ignoreCancelToken: true,
    },
  });
}
