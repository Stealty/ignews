import { query as q } from "faunadb";

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { fauna } from "../../../services/fauna";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  // #Github
  //jwt: {
  //  signingKey: process.env.SIGNING_KEY,
  //},

  callbacks: {
    async signIn({ user, account, profile }) {
      const { email } = user;

      try {
        await fauna.query(
          q.Create(q.Collection("users"), {
            data: { email },
          })
        );
        return true;
      } catch {
        return false;
      }
    },
  },
});
