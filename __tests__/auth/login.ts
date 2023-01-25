import { createMocks } from "node-mocks-http";
import { faker } from "@faker-js/faker";

import register from "../../src/pages/api/auth/register";
import login from "../../src/pages/api/auth/login";

import { NextApiRequest, NextApiResponse } from "next";

describe("/auth/register", () => {
  test("should be able login with user", async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: "POST",
      body: {
        email: "user@email.com",
        password: "password123",
      },
    });

    await login(req, res);
    expect(res.statusCode).toBe(200);
  });

  // |-------------------------------------------------------------------------|

  test("should not be able login with invalid credentials", async () => {
    const user = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const { req: registerRequest, res: registerResponse } = createMocks<
      NextApiRequest,
      NextApiResponse
    >({
      method: "POST",
      body: user,
    });

    await register(registerRequest, registerResponse);
    expect(registerResponse.statusCode).toBe(201);

    const { req: loginRequest, res: loginResponse } = createMocks<
      NextApiRequest,
      NextApiResponse
    >({
      method: "POST",
      body: {
        email: user.email,
        password: user.email,
      },
    });

    await login(loginRequest, loginResponse);
    expect(loginResponse.statusCode).toBe(401);

    expect(loginResponse._getData()).toBe(
      JSON.stringify({
        message: "Invalid email or password.",
      })
    );
  });
});
