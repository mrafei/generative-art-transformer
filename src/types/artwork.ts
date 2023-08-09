import type { Types } from "mongoose";

export interface IArtWork {
  id: string;
  initial_image_url: string;
  artist: string;
  final_image_url: string;
  creator: Types.ObjectId;
}
