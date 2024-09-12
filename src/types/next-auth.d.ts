import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Profile extends Profile {
    login: string;
  }

  interface User extends DefaultUser {
    oauthToken?: string;
    username?: string;
  }

  interface Session extends DefaultSession {
    oauthToken?: string;
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    oauthToken?: string;
    username?: string;
  }
}
