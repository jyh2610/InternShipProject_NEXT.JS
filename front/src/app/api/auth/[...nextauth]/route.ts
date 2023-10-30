import NextAuth from "next-auth";
import GoggleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";

import { baseApi } from "@/API/api";
import { CustomSession } from "@/components/signin/SocialLoginButton";

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
    async signIn() {
      return true;
    },
    async jwt({ token, account }) {
      token.accessToken = account?.access_token;
      if (token.accessToken) {
        token.accessToken = account?.access_token;
        const url = `/sign/${account?.provider}login`;

        const res: CustomSession = await api.post({
          url,
          options: {
            headers: {
              Authorization: `Bearer ${account?.access_token}`,
            },
          },
        });
        token.user = res;
      }

      return token;
    },
    async session({ session, token }: any) {
      session.coustomData = token.user;
      console.log(session.coustomData);

      return session.coustomData;
    },
  },
});

export { handler as GET, handler as POST };
