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
      console.log(token, "---------");
      console.log(111);
      console.log(account, "--------------");
      if (account) {
        token.token = account?.access_token;
        const url = "/sign/" + account.provider + "login";

        console.log(url, 2);

        console.log(account, 3);

        const res: CustomSession = await api.post({
          url,
          options: {
            headers: {
              Authorization: "Bearer " + (account ? account.access_token : ""),
            },
          },
        });
        console.log(res);

        token.server = res;
        return token;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.server = token.server;
      console.log(session);

      return session;
    },
  },
};
export const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
