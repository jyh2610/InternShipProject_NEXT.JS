import NextAuth from "next-auth";
import NaverProvider from "next-auth/providers/naver";

const handler = NextAuth({
  providers: [
    NaverProvider({
      clientId: process.env.NODE_ENV_API_NAVERID || "",
      clientSecret: process.env.NODE_ENV_API_NAVERSECRECT || "",
    }),
  ],

  callbacks: {
    async signIn({ account }) {
      // 여기서 accessToken을 가져올 수 있습니다.
      if (account?.provider === "naver") {
        // NaverProvider를 사용하고 있으므로, account.accessToken을 사용할 수 있습니다.
        const accessToken = account.accessToken;

        // accessToken을 로컬 스토리지에 저장합니다.
        typeof accessToken === "string" && localStorage.setItem("accessToken", accessToken);

        console.log("Naver Access Token:", accessToken);
      }
      return true;
    },
  },
});

export { handler as GET, handler as POST };
