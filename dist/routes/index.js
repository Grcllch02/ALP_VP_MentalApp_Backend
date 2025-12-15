"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameState_routes_1 = __importDefault(require("./gameState-routes"));
const auth_routes_1 = __importDefault(require("./auth-routes"));
const music_routes_1 = __importDefault(require("./music-routes"));
const router = (0, express_1.Router)();
router.use('/game-states', gameState_routes_1.default);
router.use('/auth', auth_routes_1.default);
router.use('/music', music_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map