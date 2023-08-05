import { useState } from "react";
import { useRouter } from "next/navigation";
import authServices from "@/services/auth";
import { DASHBOARD_ROUTE } from "@/constants/routes";

export type LoginHook = () => {
  login: () => void;
  password: string;
  username: string;
  setPassword: (username: string) => void;
  setUsername: (username: string) => void;
};
const useLogin: LoginHook = () => {
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = async () => {
    const user = await authServices.login(username, password);
    const token = user?.token;
    if (token) router.push(DASHBOARD_ROUTE);
  };

  return { login, username, setUsername, password, setPassword };
};

export default useLogin;
