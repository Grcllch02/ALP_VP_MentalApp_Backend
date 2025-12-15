import { Router } from 'express';
import { GameStateController } from '../controllers/gameState-controller';

const router = Router();
const gameStateController = new GameStateController();

router.get('/', gameStateController.getAllGameStates);
router.get('/user/:userId/latest', gameStateController.getLatestGameStateByUserId);
router.get('/:id', gameStateController.getGameStateById);
router.post('/', gameStateController.createGameState);
router.put('/:id', gameStateController.updateGameState);
router.delete('/:id', gameStateController.deleteGameState);

export default router;
