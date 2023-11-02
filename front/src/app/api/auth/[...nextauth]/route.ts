import NextAuth from "next-auth";
import GoggleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";

import { baseApi } from "@/API/api";

import type { CustomSession } from "@/components/signin/SocialLoginButton";

const api = new baseApi();
const authOption = {
  providers: [
    NaverProvider({
      clientId: process.env.NODE_ENV_API_NAVERID ?? "",
      clientSecret: process.env.NODE_ENV_API_NAVERSECRECT ?? "",
    }),
    KakaoProvider({ clientId: process.env.NODE_ENV_API_KAKAOID ?? "", clientSecret: process.env.NODE_ENV_API_KAKAOSECRECT || "" }),
    GoggleProvider({
      clientId: process.env.NODE_ENV_API_GOOGLEEID ?? "",
      clientSecret: process.env.NODE_ENV_API_GOOGLESECRECT ?? "",
    }),
  ],
  callbacks: {
    async signIn() {
      return true;
    },
    async jwt({ token, account }: any) {
      token.token = account?.access_token;
      if (account) {
        token.token = account?.access_token;
        const url = "/sign/" + account.provider + "login";
        api.reSettingURL("https://archiple.com/back");
        console.log(api.getURL());
        const res: CustomSession = await api.post({
          url: url, // 실제 API 엔드포인트
          options: {
            headers: {
              Authorization: `Bearer ${account.access_token}`,
            },
          },
        });
        // baseURL를 원래대로 리셋
        api.reSettingURL(process.env.NEXT_PUBLIC_BASE_URL!);
        token.server = res;
        console.log(token, "1111111");
        return token;
      }
      console.log(token, 222222222222);
      return token;
    },
    async session({ session, token }: any) {
      session.server = token.server;
      return session;
    },
  },
};
export const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
