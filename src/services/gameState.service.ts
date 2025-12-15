import { GameStateRepository } from '../repositories/gameState.repository';

export class GameStateService {
  private repository: GameStateRepository;

  constructor() {
    this.repository = new GameStateRepository();
  }

  async getAllGameStates() {
    return await this.repository.findAll();
  }

  async getGameStateById(id: number) {
    const gameState = await this.repository.findById(id);
    if (!gameState) {
      throw new Error('Game state not found');
    }
    return gameState;
  }

  async getLatestGameStateByUserId(userId: number) {
    const gameState = await this.repository.findLatestByUserId(userId);
    if (!gameState) {
      throw new Error('No saved game found for this user');
    }
    return gameState;
  }

  async createGameState(data: { user_id: number; boardState: string; score?: number; nextBlocks: string }) {
    return await this.repository.create(data);
  }

  async updateGameState(id: number, data: { boardState?: string; score?: number; nextBlocks?: string }) {
    return await this.repository.update(id, data);
  }

  async deleteGameState(id: number) {
    return await this.repository.delete(id);
  }
}
