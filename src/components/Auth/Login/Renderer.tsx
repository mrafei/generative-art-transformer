import Input from "@/components/Input";
import Link from "next/link";
import { SIGNUP_ROUTE } from "@/constants/routes";
import type { FC } from "react";
import type { LoginHook } from "@/hooks/auth/useLogin";

const LoginRenderer: FC<ReturnType<LoginHook>> = (props) => {
  const { username, setUsername, password, setPassword, login } = props;
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
        <button
          type="button"
          className="inline-block rounded border-2 border-red-600 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-red-600 transition duration-150 ease-in-out hover:border-red-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-red-600 focus:border-red-600 focus:text-red-600 focus:outline-none focus:ring-0 active:border-red-700 active:text-red-700"
          data-te-ripple-color="light"
          onClick={login}
        >
          Login
        </button>
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
