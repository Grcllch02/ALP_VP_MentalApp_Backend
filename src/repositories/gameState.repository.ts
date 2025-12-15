import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

export class GameStateRepository {
  async findAll() {
    return await prisma.gameState.findMany();
  }

  async findById(id: number) {
    return await prisma.gameState.findUnique({ where: { id } });
  }

  async findLatestByUserId(userId: number) {
    return await prisma.gameState.findFirst({
      where: { user_id: userId },
      orderBy: { updatedAt: 'desc' }
    });
  }

  async create(data: { user_id: number; boardState: string; score?: number; nextBlocks: string }) {
    return await prisma.gameState.create({
      data: {
        user_id: data.user_id,
        boardState: data.boardState,
        score: data.score ?? 0,
        nextBlocks: data.nextBlocks
      }
    });
  }

  async update(id: number, data: { boardState?: string; score?: number; nextBlocks?: string }) {
    return await prisma.gameState.update({
      where: { id },
      data
    });
  }

  async delete(id: number) {
    return await prisma.gameState.delete({ where: { id } });
  }
}
