import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Autorizacion Invalida" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token) as {
      userId: string;
      role: string;
    };

    req.user = {
      id: decoded.userId,
      role: decoded.role as any,
    };

    next();
  } catch {
    return res.status(401).json({ message: "Token invalido o Expirado" });
  }
};
