import request from "@/utils/request";
import { GET_ART_URL } from "@/constants/api";
import HTTPStatusCodes from "@/constants/http";

import type { IArtWork } from "@/types/artwork";

type GetArtResponseSuccessType = IArtWork & {
  statusCode: HTTPStatusCodes.Ok;
};
type GetArtResponseFailedType = {
  statusCode: HTTPStatusCodes.BadRequest;
  message: string;
};
type GetArtResponseType = GetArtResponseSuccessType | GetArtResponseFailedType;
async function getArt(id: string) {
  try {
    const res = await request<GetArtResponseType>({
      url: GET_ART_URL(id),
    });
    if (res.statusCode === HTTPStatusCodes.Ok) return res;
    return null;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log("get art service failed!", e);
    return null;
  }
}
export default getArt;
