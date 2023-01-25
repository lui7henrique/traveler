import { createMocks } from "node-mocks-http";
import { faker } from "@faker-js/faker";
import { NextApiRequest, NextApiResponse } from "next";

import register from "../../src/pages/api/auth/register";

describe("/auth/register", () => {
  test("should be able to create new user with name, e-mail and password", async () => {
    const body = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: "POST",
      body,
    });

    await register(req, res);
    expect(res.statusCode).toBe(201);
  });

  // |-------------------------------------------------------------------------|

  test("should not be able to create user without any fields (name, e-mail or password)", async () => {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: "POST",
      body: {},
    });

    await register(req, res);
    expect(res.statusCode).toBe(406);
  });

  // |-------------------------------------------------------------------------|

  test("should not be able to create user with invalid email", async () => {
    const body = {
      name: faker.name.fullName(),
      email: faker.internet.password(),
      password: faker.internet.password(),
    };

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: "POST",
      body,
    });

    await register(req, res);
    expect(res.statusCode).toBe(406);

    expect(res._getData()).toBe(
      JSON.stringify({
        message: "Email must be a valid email (with @ and .domain)",
      })
    );
  });

  // |-------------------------------------------------------------------------|

  test("should not be able to create a user when an email has already been used", async () => {
    const body = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method: "POST",
      body,
    });

    await register(req, res);
    expect(res.statusCode).toBe(201);

    const { req: repeatedReq, res: repeteadRes } = createMocks<
      NextApiRequest,
      NextApiResponse
    >({
      method: "POST",
      body,
    });

    await register(repeatedReq, repeteadRes);
    expect(repeteadRes.statusCode).toBe(403);
  });
});
