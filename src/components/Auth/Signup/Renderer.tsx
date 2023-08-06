import Input from "@/components/Input";
import Link from "next/link";
import { LOGIN_ROUTE } from "@/constants/routes";
import Button from "@/components/Button";
import useSignup from "@/hooks/auth/useSignup";
import type { FC } from "react";

const SignupRenderer: FC = () => {
  const {
    name,
    username,
    password,
    setName,
    setUsername,
    setPassword,
    signup,
  } = useSignup();
  const isButtonDisabled = !username || !password || !name;

  return (
    <div className="flex flex-col gap-4">
      <p>Please Signup to your account</p>
      <Input
        placeholder="Full name"
        label="Full name"
        value={name}
        onChange={setName}
      />
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
        <Button disabled={isButtonDisabled} onClick={signup}>
          Signup
        </Button>

        <Link href={LOGIN_ROUTE}>
          <p className="mb-0 mr-2 hover:text-primary">
            Have an account already?
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SignupRenderer;
