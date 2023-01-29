import { NextApiRequest, NextApiResponse } from "next";
import { createMocks } from "node-mocks-http";

import me from "../../src/pages/api/users/me";
import login from "../../src/pages/api/auth/login";
import { randomUUID } from "crypto";

const expiredJWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsYmJpZzE0eDAwMDJ1bjc0NnhhMjZwZnMiLCJuYW1lIjoiTHVpeiBIZW5yaXF1ZSBEZWxmaW5vIiwiZW1haWwiOiJ0ZXN0OUBnbWFpbC5jb20iLCJwYXNzd29yZCI6ImI4YWIyNjNlYTlmMzIwMDI2MjhiODY4MTQ0YWQ2ZDIyYzFkZGQzZTg3ODAxYTUzNjRmMjNkNTc4MDcxNWRhYjgiLCJjcmVhdGVkQXQiOiIyMDIyLTEyLTA2VDAwOjU2OjAwLjcwNloiLCJ1cGRhdGVkQXQiOiIyMDIyLTEyLTA2VDAwOjU2OjAwLjcwNloiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjcwMjg4NjcwLCJleHAiOjE2NzAyODg5NzB9.S8AWUCc-tYxfSShchRdc1oOkuZkdUw3LDdwlVzTrdV8";

describe("users/me", () => {
  test("should be able to get my informations when has token ", async () => {
    const getToken = async () => {
      const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
        method: "POST",
        body: {
          email: "user@email.com",
          password: "password123",
        },
      });

      await login(req, res);
      const { token } = JSON.parse(res._getData());

      return token as string;
    };

    const token = await getToken();

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    await me(req, res);

    const { user } = JSON.parse(res._getData());
    const expected = { name: "user", email: "user@email.com" };

    expect(user).toMatchObject(expected);
    expect(res.statusCode).toBe(200);
  });

  test("should not be able to get my informations without token", async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: "GET",
      headers: {},
    });

    await me(req, res);
    const { message } = JSON.parse(res._getData());

    expect(res.statusCode).toBe(401);
    expect(message).toBe("Token must be provided.");
  });

  test("should not be able to get my informations with invalid token", async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: "GET",
      headers: {
        authorization: `Bearer ${randomUUID()}`,
      },
    });

    await me(req, res);
    const { message } = JSON.parse(res._getData());

    expect(res.statusCode).toBe(401);
    expect(message).toBe("jwt malformed");
  });

  test("should be not be able to get my informations with expired token", async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: "GET",
      headers: {
        authorization: `Bearer ${expiredJWT}`,
      },
    });

    await me(req, res);
    const { message } = JSON.parse(res._getData());

    expect(res.statusCode).toBe(401);
    expect(message).toBe("jwt expired");
  });
});
