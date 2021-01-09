import { defHttp } from '/@/utils/http/axios';
import { PostListGetResultModel, PostListParams } from './model/postModel';

enum Api {
  postListUri = '/post/list',
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
