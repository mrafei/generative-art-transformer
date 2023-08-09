import mongoose, { model } from "mongoose";
import type { IArtWork } from "@/types/artwork";

const Schema = mongoose.Schema;

const ArtWorkSchema = new Schema<IArtWork>(
  {
    initial_image_url: { type: String, required: true },
    artist: { type: String, required: true },
    final_image_url: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
      },
    },
  },
);

export default mongoose.models.ArtWork ||
  model<IArtWork>("ArtWork", ArtWorkSchema);
