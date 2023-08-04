import bcrypt from "bcryptjs";
import User from "@/models/User";
import CustomError from "@/utils/CustomError";
import type { IUser } from "@/types/user";

export type SignupParams = {
  username: IUser["username"];
  password: string;
};
const signup = async (params: SignupParams) => {
  try {
    const { username, password } = params;

    const previousUser = await User.findOne({ username });
    if (previousUser)
      throw new CustomError(`username ${username} is already taken.`);

    const user = new User(params);

    if (password) user.hash = bcrypt.hashSync(params.password, 10);

    return await user.save();
  } catch (e) {
    if (e instanceof CustomError) throw e;
    throw new CustomError(String(e), 500);
  }
};

export default signup;
