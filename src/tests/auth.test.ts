import request from "supertest";
import app from "../app";
import { prisma } from "../config/prisma";

describe("Auth login", () => {
  it("should fail with invalid credentials", async () => {
    const res = await request(app).post("/auth/login").send({
      email: "operador3@gmail.com",
      password: "wrongpassword",
    });

    expect(res.status).toBe(401);
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });
});
