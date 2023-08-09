import User from "@/models/User";
import jwt from "jsonwebtoken";
import jwtSecret from "@/configs/jwt";
import CustomError from "@/utils/CustomError";
import HTTPStatusCodes from "@/constants/http";
import ArtWork from "@/models/ArtWork";
import type { IArtWork } from "@/types/artwork";

export type TransformParams = {
  artist: IArtWork["artist"];
  image_url: IArtWork["initial_image_url"];
  token: string;
};
const transform = async (params: TransformParams) => {
  const { artist, image_url, token } = params;
  if (!jwtSecret)
    throw new CustomError(
      "no jwt secret has been set",
      HTTPStatusCodes.InternalServerError,
    );
  const decoded = jwt.verify(token, jwtSecret);
  if (typeof decoded !== "object")
    throw new CustomError(
      "malformed token",
      HTTPStatusCodes.InternalServerError,
    );
  const username = decoded.username;
  const user = await User.findOne({ username });
  if (!user) throw new CustomError("User not found!", HTTPStatusCodes.NotFound);
  const artwork = new ArtWork({
    initial_image_url: image_url,
    artist,
    final_image_url: "https://mock.png",
    creator: user._id.toString(),
  });

  return await artwork.save();
};
export default transform;
