import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

export class AuthRepository {
    async findAllUsers() {
        return await prisma.user.findMany({
            select: { id: true, username: true, email: true }
        });
    }

    async findUsersByIds(ids: number[]) {
        if (!ids || ids.length === 0) return [];
        return await prisma.user.findMany({
        where: { id: { in: ids } },
        select: { id: true, username: true, email: true }
        });
    }

    async findUserByEmail(email: string) {
        if (!email) {
        return null;
        }
        return await prisma.user.findUnique({ where: { email } });
    }

    async findUserByEmailOrUsername(email: string, username: string) {
        const or: Array<{ email?: string; username?: string }> = [];
        if (email) or.push({ email });
        if (username) or.push({ username });
        if (or.length === 0) {
            return null;
        }
        return await prisma.user.findFirst({ where: { OR: or } });
    }

    async createUser(data: { username: string; email: string; password: string }) {
        return await prisma.user.create({ data });
    }
}
