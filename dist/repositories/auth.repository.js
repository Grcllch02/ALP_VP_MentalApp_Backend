"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const prisma_1 = require("../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
class AuthRepository {
    async findAllUsers() {
        return await prisma.user.findMany({
            select: { id: true, username: true, email: true }
        });
    }
    async findUsersByIds(ids) {
        if (!ids || ids.length === 0)
            return [];
        return await prisma.user.findMany({
            where: { id: { in: ids } },
            select: { id: true, username: true, email: true }
        });
    }
    async findUserByEmail(email) {
        if (!email) {
            return null;
        }
        return await prisma.user.findUnique({ where: { email } });
    }
    async findUserByEmailOrUsername(email, username) {
        const or = [];
        if (email)
            or.push({ email });
        if (username)
            or.push({ username });
        if (or.length === 0) {
            return null;
        }
        return await prisma.user.findFirst({ where: { OR: or } });
    }
    async createUser(data) {
        return await prisma.user.create({ data });
    }
}
exports.AuthRepository = AuthRepository;
//# sourceMappingURL=auth.repository.js.map