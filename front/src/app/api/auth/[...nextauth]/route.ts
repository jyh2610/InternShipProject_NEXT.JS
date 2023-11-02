import NextAuth from "next-auth";
import GoggleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";
import { setCookie } from "cookies-next";
import { baseApi } from "@/API/api";

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
    async session({ session, token }: any) {
      session.server = token?.server;
      return session;
    },
    async jwt({ token, account }: any) {
      token.token = account?.access_token;
      if (account) {
        token.token = account?.access_token;
        const url = "/sign/" + account.provider + "login";
        api.reSettingURL("https://archiple.com/back");
        const res: { accessToken: string; refreshToken: string } = await api.post({
          url: url,
          options: {
            headers: {
              Authorization: `Bearer ${account.access_token}`,
            },
          },
        });
        setCookie("refresh_token", res.refreshToken);
        api.reSettingURL(process.env.NEXT_PUBLIC_BASE_URL!);
        token.server = res;
        return token;
      }
      this.session(token);
      return token;
    },
  },
};
export const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
