export interface GetAccountInfoModel {
  userId: number;
  nickname: string;
  username: string;
  phone: string;
  avatar: string;
  email: string;
  sex: string;
}

export interface UpdateBaseInfoParam {
  nickname: string;
  email: string;
  phone: string;
  sex: string;
}

export interface UpdatePasswordParam {
  newPassword: string;
  newPasswordAgain: string;
}
