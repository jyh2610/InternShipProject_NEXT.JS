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
    async signIn({ account, redirect }: any) {
    async signIn({ account, redirect }: any) {
      // 여기에서 사용자가 로그인을 허용할지 여부를 결정합니다.
      const isAllowed = true; // 예를 들어, 사용자의 특정 조건을 확인하여 결정할 수 있습니다.
      if (isAllowed) {
        // 사용자가 로그인을 허용하면 로그인 흐름을 계속합니다.
        const accessToken = account?.access_token;
        const refreshToken = account?.refresh_token;


        // 액세스 토큰 및 리프레시 토큰을 스토어에 저장
        // 액세스 토큰과 리프레시 토큰을 헤더에 추가합니다.
        console.log(accessToken, "엑세스 토큰입니다.");
        console.log(refreshToken, "리프레시 토큰입니다.");


        return true; // 로그인을 허용하고 흐름을 계속합니다.
      } else {
        // 사용자가 로그인을 거부하면 리다이렉트하고 흐름을 중단합니다.
      }
    },
    async jwt({ token, account }) {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        console.log(token.accessToken, "f");
        token.accessToken = account.access_token;
        console.log(token.accessToken, "f");
      }
      return token;
      return token;
    },
    async session({ session, token }: any) {
      session.accessToken = token;
      console.log(session, "세션토큰");
      return session;
    },
  },
});

export { handler as GET, handler as POST };

// const handler = NextAuth({
//   providers: [
//     NaverProvider({
//       clientId: process.env.NODE_ENV_API_NAVERID || "",
//       clientSecret: process.env.NODE_ENV_API_NAVERSECRECT || "",
//     }),
//     KakaoProvider({ clientId: process.env.NODE_ENV_API_KAKAOID || "", clientSecret: process.env.NODE_ENV_API_KAKAOSECRECT || "" }),
//     GoggleProvider({
//       clientId: process.env.NODE_ENV_API_GOOGLEEID || "",
//       clientSecret: process.env.NODE_ENV_API_GOOGLESECRECT || "",
//     }),
//   ],

//   callbacks: {
//     async jwt({ token, account }) {
//       if (account) {
//         token.accessToken = account.access_token;
//         console.log(token.accessToken, "f");
//       }
//       return token;
//     },
//     async signIn({ account }: any) {
//       console.log(account);
//       const accessToken = account?.access_token;
//       const refreshToken = account?.refresh_token;
//       // 액세스 토큰 및 리프레시 토큰을 스토어에 저장
//       // 액세스 토큰과 리프레시 토큰을 헤더에 추가합니다.
//       console.log(accessToken, "엑세스 토큰입니다.");
//       console.log(refreshToken, "리프레시 토큰입니다.");
//       // 홈 페이지로 이동

//       return true;
//     },
//     async session({ session, token }: any) {
//       session.accessToken = token;
//       console.log(session, "세션토큰");

//       return session;
//     },
//   },
//   // 커스텀 로그인 페이지를 위해 추가된 부분
//   pages: {
//     signIn: "/signin",
//   },
// });

// export { handler as GET, handler as POST };
