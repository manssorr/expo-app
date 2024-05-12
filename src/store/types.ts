import type { IAuthenticatedUser, IUser } from '@/types';

export type NullishUser = null | undefined | IAuthenticatedUser;

export interface IUserGlobalStore {
  user: NullishUser;
  updateUser: (user: IAuthenticatedUser) => void;
  resetUser: () => void;
}
