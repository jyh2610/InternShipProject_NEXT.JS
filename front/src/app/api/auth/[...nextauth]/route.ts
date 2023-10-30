import NextAuth from "next-auth";
import GoggleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";

import { baseApi } from "@/API/api";

const api = new baseApi();
const handler = NextAuth({
  providers: [
    NaverProvider({
      clientId: process.env.NODE_ENV_API_NAVERID || "",
      clientSecret: process.env.NODE_ENV_API_NAVERSECRECT || "",
    }),
    KakaoProvider({ clientId: process.env.NODE_ENV_API_KAKAOID || "", clientSecret: process.env.NODE_ENV_API_KAKAOSECRECT || "" }),
    GoggleProvider({
      clientId: process.env.NODE_ENV_API_GOOGLEEID || "",
      clientSecret: process.env.NODE_ENV_API_GOOGLESECRECT || "",
    }),
  ],

  callbacks: {
    async redirect({ baseUrl }) {
      return baseUrl;
    },
    async signIn() {
      return true;
    },
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        const socialaccesstoken = token?.accessToken;

        // const url = `/sign/${account.provider}login`;
        // const res = await api.post({
        //   url,
        //   options: {
        //     headers: {
        //       Authorization: `Bearer ${socialaccesstoken}`,
        //     },
        //   },
        // });
        // token.customData = res;
      }

      return token;
    },
    async session({ session, token }: any) {
      // session.token = token.customData;
      console.log(session, "--------------------------------");

      return session;
    },
  },
});

export { handler as GET, handler as POST };
