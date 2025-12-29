import { prisma } from "../../config/prisma";

export class UserService {
  static async findAll() {
    return prisma.users.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });
  }
}
