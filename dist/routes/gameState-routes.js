"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameState_controller_1 = require("../controllers/gameState-controller");
const router = (0, express_1.Router)();
const gameStateController = new gameState_controller_1.GameStateController();
router.get('/', gameStateController.getAllGameStates);
router.get('/user/:userId/latest', gameStateController.getLatestGameStateByUserId);
router.get('/:id', gameStateController.getGameStateById);
router.post('/', gameStateController.createGameState);
router.put('/:id', gameStateController.updateGameState);
router.delete('/:id', gameStateController.deleteGameState);
exports.default = router;
//# sourceMappingURL=gameState-routes.js.map