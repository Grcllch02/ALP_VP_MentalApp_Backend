"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameStateService = void 0;
const gameState_repository_1 = require("../repositories/gameState.repository");
class GameStateService {
    constructor() {
        this.repository = new gameState_repository_1.GameStateRepository();
    }
    async getAllGameStates() {
        return await this.repository.findAll();
    }
    async getGameStateById(id) {
        const gameState = await this.repository.findById(id);
        if (!gameState) {
            throw new Error('Game state not found');
        }
        return gameState;
    }
    async getLatestGameStateByUserId(userId) {
        const gameState = await this.repository.findLatestByUserId(userId);
        if (!gameState) {
            throw new Error('No saved game found for this user');
        }
        return gameState;
    }
    async createGameState(data) {
        return await this.repository.create(data);
    }
    async updateGameState(id, data) {
        return await this.repository.update(id, data);
    }
    async deleteGameState(id) {
        return await this.repository.delete(id);
    }
}
exports.GameStateService = GameStateService;
//# sourceMappingURL=gameState-service.js.map