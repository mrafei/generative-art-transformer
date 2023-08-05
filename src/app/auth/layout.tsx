import AuthLayout from "@/components/Auth/AuthLayout";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>;
}
