import jwtSecret from "@/configs/jwt";
import CustomError from "@/utils/CustomError";
import HTTPStatusCodes from "@/constants/http";
import jwt from "jsonwebtoken";
import User from "@/models/User";
import { UserStatus } from "@/types/user";

export type GetUserParams = {
  token?: Nullable<string>;
};

const getUser = async (params: GetUserParams) => {
  const { token } = params;
  if (!token)
    throw new CustomError(
      "No Authorization header is set",
      HTTPStatusCodes.Unauthorized,
    );

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
  if (user.status !== UserStatus.ACTIVE)
    throw new CustomError("your account has been disabled!", 409);
  return user;
};
export default getUser;
