import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { createMocks } from "node-mocks-http";

import loginHandler from "../auth/login";
import meHandler from "../users/me";

const AUTH_SECRET = process.env.AUTH_SECRET || "";

export const authOptions = {
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
        const login = createMocks({
          method: "POST",
          body: {
            email: credentials?.email,
            password: credentials?.password,
          },
        });

        try {
          await loginHandler(login.req, login.res);
          const { token } = JSON.parse(login.res._getData());

          const me = createMocks({
            method: "GET",
            headers: {
              authorization: `Bearer ${token}`,
            },
          });

          await meHandler(me.req, me.res);
          const { user } = JSON.parse(me.res._getData());

          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],

  callbacks: {},
  secret: AUTH_SECRET,
};
export default NextAuth(authOptions);
