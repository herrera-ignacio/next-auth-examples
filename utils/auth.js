import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcrypt";
import dbConnect from "@/utils/dbConnect";
import User from "@/models/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        // which fields should be submitted
        email: {},
        password: {}
      },
      async authorize(credentials, req) {
        await dbConnect();
        const { email, password } = credentials;

        try {
          const user = await User.findOne({ email });

          if (!user) {
            throw new Error("User not found");
          }

          const isPasswordMatch = await bcrypt.compare(password, user.password);

          if (!isPasswordMatch) {
            throw new Error("Invalid password");
          }

          return user;
        } catch {
          return null;
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET
})