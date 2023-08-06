import Input from "@/components/Input";
import Link from "next/link";
import { SIGNUP_ROUTE } from "@/constants/routes";
import type { FC } from "react";
import type { LoginHook } from "@/hooks/auth/useLogin";
import Button from "@/components/Button";

const LoginRenderer: FC<ReturnType<LoginHook>> = (props) => {
  const { username, setUsername, password, setPassword, login } = props;
  const isButtonDisabled = !username || !password;
  return (
    <div className="flex flex-col gap-4">
      <p>Please login to your account</p>
      <Input
        placeholder="Username"
        label="Username"
        value={username}
        onChange={setUsername}
      />

      <Input
        placeholder="Password"
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
      />

      <div className="flex items-center justify-between pb-6">
        <Button disabled={isButtonDisabled} onClick={login}>
          Login
        </Button>
        <Link href={SIGNUP_ROUTE}>
          <p className="mb-0 mr-2 hover:text-primary">
            Don&apos;t have an account?
          </p>
        </Link>
      </div>
    </div>
  );
};

export default LoginRenderer;
