import { Router } from "express";
import { UserController } from "./user.controller";
import { Role } from "@prisma/client";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { requireRole } from "../../middlewares/role.middleware";

const router = Router();

router.get(
  "/",
  authMiddleware,
  requireRole([Role.ADMIN]),
  UserController.getUsers
);

export default router;
