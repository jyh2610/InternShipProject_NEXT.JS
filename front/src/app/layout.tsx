import React from "react";

import "./globals.css";
import { Inter } from "next/font/google";

import AuthSession from "@/components/auth/AuthSession";
import StyledComponentsRegistry from "@/lib/AntdRegistry";

import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import SessionProvider from "../components/auth/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "아키플 스튜디오 2.0",
  description: "Generated by create next app",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();
  return (
    <html>
      <body className={inter.className}>
        <SessionProvider session={session}>
          <StyledComponentsRegistry>
            <AuthSession>{children}</AuthSession>
          </StyledComponentsRegistry>
        </SessionProvider>
      </body>
    </html>
  );
}
