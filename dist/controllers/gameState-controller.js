"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameStateController = void 0;
const gameState_service_1 = require("../services/gameState-service");
class GameStateController {
    constructor() {
        this.getAllGameStates = async (_req, res) => {
            try {
                const data = await this.service.getAllGameStates();
                res.json(data);
            }
            catch (error) {
                console.error('Error fetching game states:', error);
                res.status(500).json({ message: 'Failed to fetch game states' });
            }
        };
        this.getGameStateById = async (req, res) => {
            try {
                const id = Number(req.params.id);
                const data = await this.service.getGameStateById(id);
                res.json(data);
            }
            catch (error) {
                const message = error instanceof Error ? error.message : 'Failed to fetch game state';
                const status = message === 'Game state not found' ? 404 : 500;
                res.status(status).json({ message });
            }
        };
        this.getLatestGameStateByUserId = async (req, res) => {
            try {
                const userId = Number(req.params.userId);
                const data = await this.service.getLatestGameStateByUserId(userId);
                res.json(data);
            }
            catch (error) {
                const message = error instanceof Error ? error.message : 'Failed to fetch game state';
                const status = message.includes('not found') ? 404 : 500;
                res.status(status).json({ message });
            }
        };
        this.createGameState = async (req, res) => {
            try {
                const { user_id, boardState, score, nextBlocks } = req.body;
                const created = await this.service.createGameState({ user_id, boardState, score, nextBlocks });
                res.status(201).json(created);
            }
            catch (error) {
                console.error('Error creating game state:', error);
                res.status(500).json({ message: 'Failed to create game state' });
            }
        };
        this.updateGameState = async (req, res) => {
            try {
                const id = Number(req.params.id);
                const { boardState, score, nextBlocks } = req.body;
                const updated = await this.service.updateGameState(id, { boardState, score, nextBlocks });
                res.json(updated);
            }
            catch (error) {
                console.error('Error updating game state:', error);
                res.status(500).json({ message: 'Failed to update game state' });
            }
        };
        this.deleteGameState = async (req, res) => {
            try {
                const id = Number(req.params.id);
                await this.service.deleteGameState(id);
                res.status(204).send();
            }
            catch (error) {
                console.error('Error deleting game state:', error);
                res.status(500).json({ message: 'Failed to delete game state' });
            }
        };
        this.service = new gameState_service_1.GameStateService();
    }
}
exports.GameStateController = GameStateController;
//# sourceMappingURL=gameState-controller.js.map