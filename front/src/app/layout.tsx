import React from "react";

import "./globals.css";
import { Inter } from "next/font/google";

import AuthSession from "@/components/auth/AuthSession";
import StyledComponentsRegistry from "@/lib/AntdRegistry";

import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "아키플 스튜디오 2.0",
  description: "Generated by create next app",
};

// '/signin' 페이지에서 네비게이션 및 푸터를 숨기려면 다음과 같이 사용할 수 있습니다.
// const shouldShowNavAndFooter = currentPath !== "/signin";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <AuthSession>{children}</AuthSession>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
