import ArtWork from "@/models/ArtWork";
import type { IArtWork } from "@/types/artwork";
import CustomError from "@/utils/CustomError";
import HTTPStatusCodes from "@/constants/http";

export type GetArtParams = {
  id: IArtWork["id"];
};
const getArt = async (params: GetArtParams) => {
  const { id } = params;
  const art = await ArtWork.findById(id);
  if (!art) throw new CustomError("Art not found!", HTTPStatusCodes.NotFound);

  return art.toJSON();
};
export default getArt;
