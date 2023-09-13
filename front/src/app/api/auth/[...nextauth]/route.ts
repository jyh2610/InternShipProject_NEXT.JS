// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import NaverProvider from "next-auth/providers/naver";

const handler = NextAuth({
  providers: [
    NaverProvider({
      clientId: "qY0Z4lhpzdTfg_yIvaoO",
      clientSecret: "E6XarNNgIc",
    }),
  ],
});
export { handler as GET, handler as POST };
