import NextAuth from 'next-auth';
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';

import { writeClient } from "../../../lib/sanity";

const options = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: 'any-secret-word',
  session: {
        strategy: 'jwt'
    },
  adapter: SanityAdapter(writeClient),
};

export default NextAuth(options);
