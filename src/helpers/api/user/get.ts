import jwtSecret from "@/configs/jwt";
import CustomError from "@/utils/CustomError";
import HTTPStatusCodes from "@/constants/http";
import jwt from "jsonwebtoken";
import User from "@/models/User";

export type GetUserParams = {
  token: string;
};

const getUser = async (params: GetUserParams) => {
  const { token } = params;
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
  return user;
};
export default getUser;
