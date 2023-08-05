import QS from "@/utils/qs";

export interface RequestOptions {
  url: string;
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  params?: Dictionary;
  body?: Dictionary;
}

async function request<T>(options: RequestOptions) {
  const { url, method = "GET", params = {}, body } = options;

  const urlWithParams = `${url}${QS.stringify(params, {
    addQueryPrefix: true,
  })}`;
  const response = await fetch(urlWithParams, {
    method,
    ...{ body: JSON.stringify(body) },
  });
  const res: T = await response.json();
  return {...res, statusCode: response.status};
}

export default request;
