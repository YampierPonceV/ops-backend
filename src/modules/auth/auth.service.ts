import bcrypt from "bcrypt";
import { prisma } from "../../config/prisma";
import { signToken } from "../../utils/jwt";
import { Role } from "@prisma/client";

export class AuthService {
  static async register(email: string, password: string, role: Role) {
    const hasedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: {
        email,
        password: hasedPassword,
        role,
      },
    });

    const token = signToken({
      userId: user.id,
      role: user.role,
    });

    return { user, token };
  }

  static async login(email: string, password: string) {
    const user = await prisma.users.findUnique({
      where: { email },
    });
    if (!user) {
      const error: any = new Error("Usuario no existe 😒");
      error.status = 401;
      throw error;
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      const error: any = new Error("Credenciales Incorrectas");
      error.status = 401;
      throw error;
    }

    const token = signToken({
      userId: user.id,
      role: user.role,
    });

    return { user, token };
  }
}
