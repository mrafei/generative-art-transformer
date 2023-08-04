import mongoose, { model } from "mongoose";
import { type IUser, UserStatus, UserType } from "@/types/user";

const Schema = mongoose.Schema;

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    name: { type: String, required: true },
    type: {
      type: String,
      enum: Object.values(UserType),
      default: UserType.USER,
    },
    status: {
      type: String,
      enum: Object.values(UserStatus),
      default: UserStatus.ACTIVE,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.User || model<IUser>("User", UserSchema);
