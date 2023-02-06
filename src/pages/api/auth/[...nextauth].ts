import { User } from "@prisma/client";
import NextAuth, { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { hash } from "utils/password/hash";
import { encode } from "utils/token";

import prisma from "../../../lib/prisma/client";

type FormattedAuth = {
  user: User;
  token: string;
};

type FormattedJWT = {
  user: User;
  token: string;
} & JWT;

const AUTH_SECRET = process.env.AUTH_SECRET || "";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      credentials: {
        email: {
          label: "E-mail",
          type: "email",
          placeholder: "email@email.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (credentials) {
            const { email, password } = credentials;

            const user = await prisma.user.findUnique({
              where: {
                email: email,
              },
            });

            if (user) {
              const { password: passwordHash } = user;
              const isMatchPasswords = passwordHash === hash(password);

              if (isMatchPasswords) {
                const token = encode(user);

                return {
                  token,
                  user,
                };
              }
            }
          }

          return null;
        } catch (err) {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user }) => {
      const formattedAuth = user as any as FormattedAuth;

      if (formattedAuth) {
        const { token: newToken, user } = formattedAuth;

        const newJWT = {
          ...token,
          user: user,
          token: newToken,
        };

        return newJWT;
      }

      return token;
    },

    session: async ({ session, token }) => {
      const { token: newToken, user } = token as any as FormattedJWT;

      return {
        ...session,
        token: newToken,
        user,
      } as any;
    },
  },
  secret: AUTH_SECRET,
};

export default NextAuth(authOptions);
