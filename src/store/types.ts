import type { IUser } from '@/types';

export type NullishUser = null | undefined | IUser;

export interface IUserGlobalStore {
  user: NullishUser;
  updateUser: (user: NullishUser) => void;
}
