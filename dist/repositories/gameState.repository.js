"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameStateRepository = void 0;
const prisma_1 = require("../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
class GameStateRepository {
    async findAll() {
        return await prisma.gameState.findMany();
    }
    async findById(id) {
        return await prisma.gameState.findUnique({ where: { id } });
    }
    async findLatestByUserId(userId) {
        return await prisma.gameState.findFirst({
            where: { user_id: userId },
            orderBy: { updatedAt: 'desc' }
        });
    }
    async create(data) {
        return await prisma.gameState.create({
            data: {
                user_id: data.user_id,
                boardState: data.boardState,
                score: data.score ?? 0,
                nextBlocks: data.nextBlocks
            }
        });
    }
    async update(id, data) {
        return await prisma.gameState.update({
            where: { id },
            data
        });
    }
    async delete(id) {
        return await prisma.gameState.delete({ where: { id } });
    }
}
exports.GameStateRepository = GameStateRepository;
//# sourceMappingURL=gameState.repository.js.map