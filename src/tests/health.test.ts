import request from "supertest";
import app from "../app";
import { prisma } from "../config/prisma";

describe("Health check", () => {
  it("should return ok", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("OK");
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });
});
