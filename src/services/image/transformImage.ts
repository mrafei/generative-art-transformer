import request from "@/utils/request";
import { TRANSFORM_URL } from "@/constants/api";
import HTTPStatusCodes from "@/constants/http";
import { toast } from "react-toastify";

type TransformResponseSuccessType = {
  final_image_url: string;
  statusCode: HTTPStatusCodes.Ok;
};
type TransformResponseFailedType = {
  statusCode: HTTPStatusCodes.BadRequest;
  message: string;
};
type TransformResponseType =
  | TransformResponseSuccessType
  | TransformResponseFailedType;
async function transformImage(image_url: string, artist: string) {
  try {
    const res = await request<TransformResponseType>({
      method: "POST",
      url: TRANSFORM_URL,
      body: { image_url, artist },
    });
    if (res.statusCode === HTTPStatusCodes.Ok) return res;

    toast(res.message, {
      toastId: "transform-error",
      type: "error",
    });
    return null;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log("transform service failed!", e);
    return null;
  }
}
export default transformImage;
