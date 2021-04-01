export interface UploadApiResult {
  message: string;
  status: number;
  data: string;
}

export enum UploadDir {
  Avatar = 'admin_avatar',
}
