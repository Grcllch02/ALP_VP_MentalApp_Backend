import { Router } from 'express';
import gameStateRoutes from './gameState-routes';
import authRoutes from './auth-routes';

const router = Router();

router.use('/game-states', gameStateRoutes);
router.use('/auth', authRoutes);

export default router;
