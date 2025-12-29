import { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";

export const httpLogger = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  logger.info({
    method: req.method,
    url: req.url,
  });

  next();
};
