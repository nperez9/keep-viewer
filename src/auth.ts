import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async jwt({ token, account }: { token: any; account: any }) {
      if (account) {
        token = Object.assign({}, token, { access_token: account.access_token });
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      let newSession = session;
      if (session) {
        newSession = { ...session, user: { ...session.user, access_token: token.access_token } };
      }
      return newSession;
    },
  },
};

export default NextAuth(authOptions);
