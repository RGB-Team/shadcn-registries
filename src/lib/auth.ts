import { NextAuthOptions } from "next-auth";

import GithubProvider from "next-auth/providers/github";
import { env } from "@/env";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GithubProvider({
      clientId: env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      clientSecret: env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async signIn({ user, account, profile, email, credentials }) {
      user.oauthToken = account?.access_token;
      user.username = profile?.login;
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.oauthToken = user.oauthToken;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      session.oauthToken = token.oauthToken;
      session.user.username = token.username;
      return session;
    },
  },
};
