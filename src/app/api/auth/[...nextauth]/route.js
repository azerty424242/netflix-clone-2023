import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Iv1.17e72b6d641b3065",
      clientSecret: "de6287ad3f7a0febdd35d16900ba89ec63ab4543",
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session?.user?.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;

      return session;
    },
  },
  secret: "default_secret_key",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


// CLIENT SECRETS:
// 1er: 81d84e3c9a08223b177bb1f1e714dfb692870b99
// 2nd: de6287ad3f7a0febdd35d16900ba89ec63ab4543
