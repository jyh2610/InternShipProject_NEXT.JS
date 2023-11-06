import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";
import { baseApi } from "@/API/api";
import { cookies } from "next/headers";

const api = new baseApi();
const authOption = {
  providers: [
    NaverProvider({
      clientId: process.env.NODE_ENV_API_NAVERID ?? "",
      clientSecret: process.env.NODE_ENV_API_NAVERSECRECT ?? "",
    }),
    KakaoProvider({ clientId: process.env.NODE_ENV_API_KAKAOID ?? "", clientSecret: process.env.NODE_ENV_API_KAKAOSECRECT || "" }),
    GoogleProvider({
      clientId: process.env.NODE_ENV_API_GOOGLEID ?? "",
      clientSecret: process.env.NODE_ENV_API_GOOGLESECRECT ?? "",
    }),
  ],
  secret: process.env.SECRET_KEY,
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
        api.reSettingURL(process.env.NEXT_PUBLIC_BASE_URL!);
        !cookies().has("refreshToken_local") && cookies().set("refreshToken_local", res.refreshToken);

        token.server = res;
        return token;
      }
      return token;
    },
  },
};
export const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
