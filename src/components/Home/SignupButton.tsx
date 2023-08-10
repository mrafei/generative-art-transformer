import Link from "next/link";
import { SIGNUP_ROUTE } from "@/constants/routes";
import Button from "@/components/Button";
import type { FC } from "react";

const SignupButton: FC = () => (
  <Link href={SIGNUP_ROUTE}>
    <Button>Signup Now!</Button>
  </Link>
);
export default SignupButton;
