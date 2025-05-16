import { PrismaClient } from '../../generated/prisma';
import argon2 from 'argon2';

const prisma = new PrismaClient();

export const authRepository = {
  async findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  }
};
