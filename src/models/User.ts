import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export default UserSchema;
