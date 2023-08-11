import ArtWork from "@/models/ArtWork";
import type { IArtWork } from "@/types/artwork";
import getUser from "@/helpers/api/user/get";

export type TransformParams = {
  artist: IArtWork["artist"];
  image_url: IArtWork["initial_image_url"];
  userId: string;
};
const transform = async (params: TransformParams) => {
  const { artist, image_url, userId } = params;
  const artwork = new ArtWork({
    initial_image_url: image_url,
    artist,
    final_image_url: "https://mock.png",
    creator: userId,
  });

  return await artwork.save();
};
export default transform;
