import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

const AUTH_SECRET = process.env.AUTH_SECRET || "";

export interface DecodedToken extends User {
  iat: number;
  exp: number;
}

export const encode = (payload: User) => {
  const token = jwt.sign(payload, AUTH_SECRET, {
    /** expressed in seconds or a string describing a time span [zeit/ms](https://github.com/zeit/ms.js).  Eg: 60, "2 days", "10h", "7d" */
    expiresIn: "7d",
  });

  return token;
};

export const decode = (token: string): DecodedToken => {
  const decoded = jwt.verify(token, AUTH_SECRET);

  return decoded as DecodedToken;
};
