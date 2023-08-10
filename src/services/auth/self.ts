import request from "@/utils/request";
import { SELF_URL } from "@/constants/api";
import HTTPStatusCodes from "@/constants/http";
import { cookies } from "next/headers";

import type { IUser } from "@/types/user";
import { AUTH_COOKIE_KEY } from "@/constants/cookies";

type SelfResponseSuccessType = Omit<IUser, "hash"> & {
  statusCode: HTTPStatusCodes.Ok;
};
type SelfResponseFailedType = {
  statusCode: HTTPStatusCodes.BadRequest;
  message: string;
};
type SelfResponseType = SelfResponseSuccessType | SelfResponseFailedType;
async function self(token?: string) {
  try {
    const res = await request<SelfResponseType>({
      url: SELF_URL,
      cookies: { [AUTH_COOKIE_KEY]: token },
    });
    if (res.statusCode === HTTPStatusCodes.Ok) return res;
    return null;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log("self service failed!", e);
    return null;
  }
}
export default self;
