import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

export class AuthRepository {
    async findUserByEmail(email: string) {
        return await prisma.user.findUnique({ where: { email } });
    }

    async findUserByEmailOrUsername(email: string, username: string) {
        return await prisma.user.findFirst({
        where: { OR: [{ email }, { username }] }
        });
    }

    async createUser(data: { username: string; email: string; password: string }) {
        return await prisma.user.create({ data });
    }
}
