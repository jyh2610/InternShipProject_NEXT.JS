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
    async signIn({ account }) {
      console.log(account);
      const accessToken = account?.access_token;
      console.log(accessToken);
      // 여기서 accessToken을 가져올 수 있습니다.
      // if (account?.provider === "naver") {
      //   // NaverProvider를 사용하고 있으므로, account.accessToken을 사용할 수 있습니다.
      //   const accessToken = account.access_token;
      //   console.log(accessToken);
      // }
      // if (account?.provider === "google") {
      //   // NaverProvider를 사용하고 있으므로, account.accessToken을 사용할 수 있습니다.
      //   const accessToken = account.access_token;
      //   console.log(accessToken);
      // }

      return true;
    },
  },
});

export { handler as GET, handler as POST };
