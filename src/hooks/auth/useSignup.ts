import { useState } from "react";
import { useRouter } from "next/navigation";
import authServices from "@/services/auth";
import { LOGIN_ROUTE } from "@/constants/routes";

export type SignupHook = () => {
  signup: () => void;
  password: string;
  username: string;
  name: string;
  setPassword: (username: string) => void;
  setUsername: (username: string) => void;
  setName: (username: string) => void;
};
const useSignup: SignupHook = () => {
  const router = useRouter();

  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signup = async () => {
    const user = await authServices.signup(username, password, name);
    if (user) router.push(LOGIN_ROUTE);
  };

  return {
    signup,
    username,
    setUsername,
    password,
    setPassword,
    name,
    setName,
  };
};

export default useSignup;
