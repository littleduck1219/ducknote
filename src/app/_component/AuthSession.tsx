"use client";

import { SessionProvider } from "next-auth/react";
import { LayoutProps } from "@/types/props";

export default function AuthSession({ children }: LayoutProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
