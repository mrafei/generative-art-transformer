import Link from "next/link";
import Button from "@/components/Button";
import { LOGIN_ROUTE } from "@/constants/routes";
import HomeFooter from "@/components/Home/Footer";
import type { FC, PropsWithChildren } from "react";

const HomeLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col flex-1">
      <header>
        <nav className="p-3 border-b border-gray-300">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-secondary font-bold">
              Generative Art Transformer
            </Link>
            <Link href={LOGIN_ROUTE}>
              <Button>Login</Button>
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex flex-col flex-1 container items-center justify-center mx-auto px-3 py-5">
        {children}
      </main>
      <HomeFooter />
    </div>
  );
};
export default HomeLayout;
