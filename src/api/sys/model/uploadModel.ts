export interface UploadApiResult {
  message: string;
  code: number;
  url: string;
}

export enum UploadDir {
  Avatar = 'admin_avatar',
}
