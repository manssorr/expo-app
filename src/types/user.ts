export interface IUser {
  email: string;
  name: string;
  password: string;
}

export type IAuthenticatedUser = Omit<IUser, 'password'>;
