import loginService from "./login";
import signupService from "./signup";
import selfService from "./self";
const authServices = {
  login: loginService,
  signup: signupService,
  self: selfService,
};
export default authServices;
