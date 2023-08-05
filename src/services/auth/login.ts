import request from "@/utils/request";
import { LOGIN_URL } from "@/constants/api";
import HTTPStatusCodes from "@/constants/http";
import type { IUser } from "@/types/user";

type LoginResponseSuccessType = Omit<IUser, "hash"> & {
  statusCode: HTTPStatusCodes.Ok;
  token: string;
};
type LoginResponseFailedType = {
  statusCode: HTTPStatusCodes.BadRequest;
  message: string;
};
type LoginResponseType = LoginResponseSuccessType | LoginResponseFailedType;
async function login(username: string, password: string) {
  try {
    const res = await request<LoginResponseType>({
      method: "POST",
      url: LOGIN_URL,
      body: { username, password },
    });
    if (res.statusCode === HTTPStatusCodes.Ok) return res;
    return null;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log("login service failed!", e);
    return null;
  }
}
export default login;
