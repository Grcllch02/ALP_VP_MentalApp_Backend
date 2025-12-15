import { Request, Response } from 'express';
import { GameStateService } from '../services/gameState-service';

export class GameStateController {
  private service: GameStateService;

  constructor() {
    this.service = new GameStateService();
  }

  getAllGameStates = async (_req: Request, res: Response) => {
    try {
      const data = await this.service.getAllGameStates();
      res.json(data);
    } catch (error) {
      console.error('Error fetching game states:', error);
      res.status(500).json({ message: 'Failed to fetch game states' });
    }
  };

  getGameStateById = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const data = await this.service.getGameStateById(id);
      res.json(data);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to fetch game state';
      const status = message === 'Game state not found' ? 404 : 500;
      res.status(status).json({ message });
    }
  };

  getLatestGameStateByUserId = async (req: Request, res: Response) => {
    try {
      const userId = Number(req.params.userId);
      const data = await this.service.getLatestGameStateByUserId(userId);
      res.json(data);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to fetch game state';
      const status = message.includes('not found') ? 404 : 500;
      res.status(status).json({ message });
    }
  };

  createGameState = async (req: Request, res: Response) => {
    try {
      const { user_id, boardState, score, nextBlocks } = req.body;
      const created = await this.service.createGameState({ user_id, boardState, score, nextBlocks });
      res.status(201).json(created);
    } catch (error) {
      console.error('Error creating game state:', error);
      res.status(500).json({ message: 'Failed to create game state' });
    }
  };

  updateGameState = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const { boardState, score, nextBlocks } = req.body;
      const updated = await this.service.updateGameState(id, { boardState, score, nextBlocks });
      res.json(updated);
    } catch (error) {
      console.error('Error updating game state:', error);
      res.status(500).json({ message: 'Failed to update game state' });
    }
  };

  deleteGameState = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      await this.service.deleteGameState(id);
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting game state:', error);
      res.status(500).json({ message: 'Failed to delete game state' });
    }
  };
}
