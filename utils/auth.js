import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import {getUserByCredentials, getUserByEmail} from "@/utils/users";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        // which fields should be submitted
        email: {},
        password: {}
      },
      async authorize(credentials, req) {
        return getUserByCredentials(credentials.email, credentials.password);
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      // this step is necessary to inject the user from the db with its roles
      // note that the user's profile coming from the provider is only exposed
      // during the first call (right after sign-in)
      if (user) {
        const userFromDb = await getUserByEmail(user.email);
        token.role = userFromDb.role;
      }
      return token;
    },
    session: ({ session, token }) => {
      // this step is necessary to inject the user that comes from the token
      // and make it available from the session object (e.g., auth(), useSession())
      session.user.role = token.role;
      return session;
    }
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET
})

export const authenticationRoutes = ["/login", "/register"];
export const nonAuthenticatedRoutes = ["/", ...authenticationRoutes];
export const adminOnlyRoutes = ["/dashboard/admin"];