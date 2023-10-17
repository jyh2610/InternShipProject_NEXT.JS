import NextAuth from "next-auth";
import GoggleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";

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
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        console.log(token.accessToken, "f");
      }
      return token;
    },
    async signIn({ account }: any) {
      console.log(account);
      const accessToken = account?.access_token;
      const refreshToken = account?.refresh_token;
      // 액세스 토큰 및 리프레시 토큰을 스토어에 저장
      // 액세스 토큰과 리프레시 토큰을 헤더에 추가합니다.
      console.log(accessToken, "엑세스 토큰입니다.");
      console.log(refreshToken, "리프레시 토큰입니다.");
      // 홈 페이지로 이동

      return true;
    },
    async session({ session, token }: any) {
      session.accessToken = token;
      console.log(session, "세션토큰");

      return session;
    },
  },
  // 커스텀 로그인 페이지를 위해 추가된 부분
  pages: {
    signIn: "/signin",
  },
});

export { handler as GET, handler as POST };
