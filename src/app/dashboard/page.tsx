import type { FC } from "react";
import authServices from "@/services/auth";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "@/constants/cookies";
import { redirect } from "next/navigation";
import { LOGIN_ROUTE } from "@/constants/routes";

const DashboardPage: FC = async () => {
  const cookieStore = cookies();

  const user = await authServices.self(cookieStore.get(AUTH_COOKIE_KEY)?.value);
  if (!user) return redirect(LOGIN_ROUTE);
  return <div>Dashboard</div>;
};
export default DashboardPage;
