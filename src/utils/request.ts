import QS from "@/utils/qs";

export interface RequestOptions {
  url: string;
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  params?: Dictionary;
}

async function request<T>(options: RequestOptions) {
  const { url, method = "GET", params = {} } = options;

  const urlWithParams = `${url}${QS.stringify(params, {
    addQueryPrefix: true,
  })}`;
  const response = await fetch(urlWithParams, {
    method,
  });
  const res: T = await response.json();
  return res;
}

export default request;
