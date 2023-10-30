import NextAuth from "next-auth";
import GoggleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";

import { baseApi } from "@/API/api";
import { CustomSession } from "@/components/signin/SocialLoginButton";

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
    async jwt({ token, account }: any) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }: any) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
  // callbacks: {
  //   async signIn() {
  //     return true;
  //   },
  //   async jwt({ token, account }) {
  //     token.token = account?.access_token;
  //     if (account) {
  //       token.token = account?.access_token;
  //       const url = `/sign/${account?.provider}login`;
  //       // console.log(url);

  //       // const res: CustomSession = await api.post({
  //       //   url,
  //       //   options: {
  //       //     headers: {
  //       //       Authorization: `Bearer ${account?.access_token}`,
  //       //     },
  //       //   },
  //       // });
  //       // console.log(res);
  //       // token.user = res;
  //       return token;
  //     }
  //     return token;
  //   },
  //   async session({ session, token }: any) {
  //     console.log(token);
  //     session.accessToken = token.token;
  //     session.expire = token.token;
  //     return session.token;
  //   },
  // },
};
export const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
