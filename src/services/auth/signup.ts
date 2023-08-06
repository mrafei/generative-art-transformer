import request from "@/utils/request";
import { SIGNUP_URL } from "@/constants/api";
import HTTPStatusCodes from "@/constants/http";
import { toast } from "react-toastify";
import type { IUser } from "@/types/user";

type SignupResponseSuccessType = Omit<IUser, "hash"> & {
  statusCode: HTTPStatusCodes.Created;
};
type SignupResponseFailedType = {
  statusCode: HTTPStatusCodes.BadRequest;
  message: string;
};
type SignupResponseType = SignupResponseSuccessType | SignupResponseFailedType;
async function Signup(username: string, password: string, name: string) {
  try {
    const res = await request<SignupResponseType>({
      method: "POST",
      url: SIGNUP_URL,
      body: { name, username, password },
    });
    if (res.statusCode === HTTPStatusCodes.Created) {
      toast("You are now signed up!", {
        toastId: "signup-success",
        type: "success",
      });
      return res;
    }
    toast(res.message, {
      toastId: "signup-error",
      type: "error",
    });
    return null;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log("Signup service failed!", e);
    return null;
  }
}
export default Signup;
