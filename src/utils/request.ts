import QS from "@/utils/qs";
import { AUTH_COOKIE_KEY } from "@/constants/cookies";
import { getCookie } from "cookies-next";

export interface RequestOptions {
  url: string;
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  params?: Dictionary;
  body?: Dictionary;
  cookies?: Dictionary;
  headers?: Dictionary;
}

async function request<T>(options: RequestOptions) {
  const { url, method = "GET", params = {}, body, cookies, headers } = options;
  const authCookie = cookies?.[AUTH_COOKIE_KEY] || getCookie(AUTH_COOKIE_KEY);
  const urlWithParams = `${url}${QS.stringify(params, {
    addQueryPrefix: true,
  })}`;
  const response = await fetch(urlWithParams, {
    method,
    ...{ body: JSON.stringify(body) },
    headers: {
      ...headers,
      ...(authCookie
        ? {
            Authorization: `Bearer ${authCookie}`,
          }
        : {}),
    },
  });
  const res: T = await response.json();
  return { ...res, statusCode: response.status };
}

export default request;
