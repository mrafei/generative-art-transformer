import authServices from "@/services/auth";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "@/constants/cookies";
import { redirect } from "next/navigation";
import { LOGIN_ROUTE } from "@/constants/routes";
import Dashboard from "@/components/Dashboard";

const DashboardPage = async () => {
  const cookieStore = cookies();

  const user = await authServices.self(cookieStore.get(AUTH_COOKIE_KEY)?.value);
  if (!user) return redirect(LOGIN_ROUTE);
  return <Dashboard />;
};
export default DashboardPage;
