import express from "express";
import dotenv from "dotenv";
//import { prisma } from "./config/prisma";
import UserRouters from "./modules/users/user.routes";
import authRoutes from "./modules/auth/auth.routes";
import { errorHandler } from "./middlewares/error.middleware";
import { httpLogger } from "./middlewares/logger.middleware";
import healthRoutes from "./modules/health/health.routes";

dotenv.config();

const app = express();

app.use(express.json());
//app.get("/health", (req, res) => res.status(200).json({ status: "OK" }));
app.use("/health", healthRoutes);
app.use(httpLogger);
app.use("/users", UserRouters);
app.use("/auth", authRoutes);
app.use(errorHandler);

export default app;
