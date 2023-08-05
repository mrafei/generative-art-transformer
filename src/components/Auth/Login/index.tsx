"use client";
import LoginRenderer from "./Renderer";
import useLogin from "@/hooks/auth/useLogin";
import type { FC } from "react";

const Login: FC = () => {
  const { username, setUsername, password, setPassword, login } = useLogin();
  return (
    <LoginRenderer
      login={login}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
    />
  );
};

export default Login;
