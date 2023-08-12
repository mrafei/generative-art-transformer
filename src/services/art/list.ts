import request from "@/utils/request";
import { GET_ART_LIST_URL, GET_ART_URL } from "@/constants/api";
import HTTPStatusCodes from "@/constants/http";

import type { IArtWork } from "@/types/artwork";

type GetArtsListResponseSuccessType = {
  statusCode: HTTPStatusCodes.Ok;
  arts: Array<IArtWork>;
};
type GetArtsListResponseFailedType = {
  statusCode: HTTPStatusCodes.BadRequest;
  message: string;
};
type GetArtsListResponseType =
  | GetArtsListResponseSuccessType
  | GetArtsListResponseFailedType;
async function getArtsList() {
  try {
    const res = await request<GetArtsListResponseType>({
      url: GET_ART_LIST_URL,
    });
    if (res.statusCode === HTTPStatusCodes.Ok) return res;
    return null;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log("get art service failed!", e);
    return null;
  }
}
export default getArtsList;
