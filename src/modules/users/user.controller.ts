import { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
  static async getUsers(req: Request, res: Response) {
    const users = await UserService.findAll();
    res.json(users);
  }
}
