export enum UserType {
  USER = "user",
  ADMIN = "admin",
}
export enum UserStatus {
  ACTIVE = "active",
  DISABLED = "disabled",
}


export interface IUser {
  id: string;
  username: string;
  hash: string;
  name: string;
  type: UserType;
  status: UserStatus;
}
