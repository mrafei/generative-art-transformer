import Input from "@/components/Input";
import Link from "next/link";
import type { FC } from "react";

const SignupRenderer: FC = () => (
  <div className="flex flex-col gap-4">
    <p>Please Signup to your account</p>
    <Input placeholder="Full name" label="Full name" />
    <Input placeholder="Username" label="Username" />
    <Input placeholder="Password" label="Password" type="password" />
    <div className="flex items-center justify-between pb-6">
      <button
        type="button"
        className="inline-block rounded border-2 border-red-600 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-red-600 transition duration-150 ease-in-out hover:border-red-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-red-600 focus:border-red-600 focus:text-red-600 focus:outline-none focus:ring-0 active:border-red-700 active:text-red-700"
        data-te-ripple-color="light"
      >
        Signup
      </button>
      <Link href="/auth/login">
        <p className="mb-0 mr-2 hover:text-primary">Have an account already?</p>
      </Link>
    </div>
  </div>
);

export default SignupRenderer;
