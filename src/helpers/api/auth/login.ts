import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import CustomError from "@/utils/CustomError";

import type { IUser } from "@/types/user";
import { UserStatus } from "@/types/user";

export type LoginParams = {
  username: IUser["username"];
  password: string;
};
const login = async (params: LoginParams) => {
  const { username, password } = params;
  const user = await User.findOne({ username });
  const jwtSecret = process.env.JWT_SECRET;
  if (!(user && bcrypt.compareSync(password, user.hash)))
    throw new CustomError("username or password is incorrect");
  if (user.status !== UserStatus.ACTIVE)
    throw new CustomError("your account has been disabled!", 409);
  if (!jwtSecret) throw new CustomError("no jwt secret has been set", 500);

  const token = jwt.sign({ username, id: user.id }, jwtSecret);

  return {
    ...user.toJSON(),
    token,
  };
};
export default login;
