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
  pages: {
    // 커스텀 로그인 페이지 경로
    signIn: "/",
    signOut: "/auth/logout",
    verifyRequest: "/auth/verify-request",
    newUser: "/auth/signup", // 커스텀 가입 페이지 경로
  },
  callbacks: {
    async signIn({ account }) {
      const accessToken = account?.access_token;
      const refreshToken = account?.refresh_token;
      console.log(accessToken, "엑세스 토큰입니다.");
      console.log(refreshToken, "리프레시 토큰입니다.");
      return true; // 로그인을 허용하고 흐름을 계속합니다.
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        console.log(token.accessToken, "f");
        token.accessToken = account.access_token;
        console.log(token.accessToken, "f");
      }

      return token;
    },
    async session({ session, token }: any) {
      session.accessToken = token;
      console.log(token, "세션토큰");
      return token;
    },
  },
});

export { handler as GET, handler as POST };
// AAAAOngXBrMb9-6kjRm1Zrc_w2d5pZmVM4T-uGc8sY102rhzWlWBDjU5lEG3-xRAg0c5oWylQP8cuQPF6jLAzI1
// ya29.a0AfB_byCHRggdhBL0MiCDYhpc7__7x_Nx5DNHRk3nH0jyYbipbj1KymxNvf_t_6Q4LJIfRybEHoSPgZDxS317rf8BUFxRqDuJ6uJ5feujvwY1GX1z-yudnmYFkP5aQJs_czEneIMiziNzey95tZd5elViFrsWgJ2aC1QaCgYKAf4SARMSFQGOcNnC6SvP116MV9NdN7XPfAlI3A0170 세션정보
