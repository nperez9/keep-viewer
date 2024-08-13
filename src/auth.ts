import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks: {
    async jwt(accountStuff: { token: any; account: any }) {
      console.log('accountStuff', accountStuff);
      let { token, account } = accountStuff;
      if (account) {
        token = Object.assign({}, token, { access_token: account.access_token });
      }
      return token;
    },
    async session(sessionStuff: { session: any; token: any }) {
      const { session, token } = sessionStuff;
      console.log(sessionStuff);
      let newSession = session;
      if (session) {
        newSession = { ...session, user: { ...session.user, access_token: token.access_token } };
      }
      return newSession;
    },
  },
};

export default NextAuth(authOptions);
