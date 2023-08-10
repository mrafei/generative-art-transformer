import ArtWork from "@/models/ArtWork";
import type { IArtWork } from "@/types/artwork";
import getUser from "@/helpers/api/user/get";

export type TransformParams = {
  artist: IArtWork["artist"];
  image_url: IArtWork["initial_image_url"];
  token: string;
};
const transform = async (params: TransformParams) => {
  const { artist, image_url, token } = params;
  const user = await getUser({ token });
  const artwork = new ArtWork({
    initial_image_url: image_url,
    artist,
    final_image_url: "https://mock.png",
    creator: user._id.toString(),
  });

  return await artwork.save();
};
export default transform;
