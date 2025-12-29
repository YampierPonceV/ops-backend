import { Router } from "express";
import { prisma } from "../../config/prisma";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({
      status: "OK",
      db: "connected",
    });
  } catch {
    res.status(500).json({
      status: "ERROR",
      db: "disconnected",
    });
  }
});

export default router;
